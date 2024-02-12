import { Ship } from './ship';
export { Gameboard };

class Gameboard {
  constructor() {
    this.board = this.#createGameboard();
    this.allShips = [];
    this.sunkShips = [];
  }

  #createGameboard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        // Create an object in each square of the board to control its future flow
        board[i].push([
          {
            containsShip: false,
            isAdjacentToSomeShip: false,
            isMissedShot: false,
            isAdjacentToSomeSunkShip: false,
            hasBeenTargetted: false,
          },
        ]);
      }
    }
    return board;
  }

  #fitInBoardLimits(...coordinates) {
    const arrayWithCoordinates = coordinates;
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    // Check limits of ships of length 1 as well as 2,3,4 (the latter will be created with coordinate combinations in two arrays)
    if (Array.isArray(x) && Array.isArray(y)) {
      const xIsOutsideBoard = x.filter((x) => x > 9);
      const yIsOutsideBoard = y.filter((y) => y > 9);
      if (xIsOutsideBoard.length || yIsOutsideBoard.length) {
        return false;
      } else {
        return true;
      }
    }

    if (x > 9 || y > 9 || x < 0 || y < 0) {
      return false;
    } else {
      return true;
    }
  }

  #reserveAdjacentSquares(...coordinates) {
    const arrayWithCoordinates = coordinates;
    const coordinateX = arrayWithCoordinates[0];
    const coordinateY = arrayWithCoordinates[1];
    const property = arrayWithCoordinates[2];

    // Use two arrays filled with all possible adjacent squares of the coordinates
    const adjacentCoordinatesOfX = [-1, 0, 1, 1, 1, 0, -1, -1];
    const adjacentCoordinatesOfY = [-1, -1, -1, 0, 1, 1, 1, 0];

    for (let i = 0; i < 8; i++) {
      const x = coordinateX + adjacentCoordinatesOfX[i];
      const y = coordinateY + adjacentCoordinatesOfY[i];

      // Refactor here too
      if (property === 'isAdjacentToSomeShip') {
        if (x > 9 || y > 9 || x < 0 || y < 0) {
          continue;
        } else if (this.getInfoAtBoardCoordinates(x, y).containsShip) {
          continue;
        } else {
          this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeShip = true;
        }
      } else if (property === 'isAdjacentToSomeSunkShip') {
        if (x > 9 || y > 9 || x < 0 || y < 0) {
          continue;
        } else if (this.getInfoAtBoardCoordinates(x, y).containsShip) {
          continue;
        } else {
          this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeSunkShip = true;
        }
      }
    }
  }

  #confirmCoordinatesAreNotAvailable(...coordinates) {
    const resultOfHelper = this.#accessPropertyOnShipObject(
      coordinates,
      'containsShip'
    );
    return resultOfHelper;
  }

  #standInAnotherShipAdjacentSquares(...coordinates) {
    const resultOfHelper = this.#accessPropertyOnShipObject(
      coordinates,
      'isAdjacentToSomeShip'
    );
    return resultOfHelper;
  }

  // Use the rest operator to place all arguments into one array and then extract specific parts of it
  #accessPropertyOnShipObject(...coordinatesAndProperty) {
    const arrayWithArguments = coordinatesAndProperty;
    const x = arrayWithArguments[0][0];
    const y = arrayWithArguments[0][1];
    const property = arrayWithArguments[1];

    let willCancelShipCreation;
    if (Array.isArray(x) && Array.isArray(y)) {
      for (let i = 0; i < x.length; i++) {
        // Access a property on the ship with which the method was called
        willCancelShipCreation = this.getInfoAtBoardCoordinates(x[i], y[i])[
          property
        ];

        if (willCancelShipCreation) {
          return true;
        }
      }
      return false;
    } else {
      willCancelShipCreation = this.getInfoAtBoardCoordinates(x, y)[property];

      if (willCancelShipCreation) {
        return true;
      } else {
        return false;
      }
    }
  }

  placeShip(x, y, shipSize, direction = 'hor') {
    const ship = new Ship(shipSize);

    if (this.allShips.length >= 10) {
      return 'There are 10 ships on the board. The limit is reached';
    } else if (ship.length < 1 || ship.length > 4) {
      return 'Cannot place a ship of this length. Min length is 1. Max length is 4';
    }

    if (ship.length > 1) {
      // Create two arrays to place ships over multiple squares, doing it in both directions.
      const allValuesOfX = [];
      const allValuesOfY = [];

      // If placed horizontally, the ship's first square will generate the rest of squares to the right, without changing the row
      if (direction === 'hor') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          x += 1;
        }
        // If placed vertically, the ship's first square will generate the rest of squares below, without changing the column
      } else if (direction === 'ver') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          y += 1;
        }
      }

      // Check if any of these restrictions is broken before placing a ship. If yes, the ship is not placed on the board
      if (!this.#fitInBoardLimits(allValuesOfX, allValuesOfY)) {
        return 'Cannot place the ship outside the board';
      } else if (
        this.#confirmCoordinatesAreNotAvailable(allValuesOfX, allValuesOfY)
      ) {
        return 'Cannot place the ship in cells taken by another ship';
      } else if (
        this.#standInAnotherShipAdjacentSquares(allValuesOfX, allValuesOfY)
      ) {
        return 'Cannot place the ship right beside another ship';
      }

      // Make sure there is one square of a gap between two ships (in all directions)
      for (let i = 0; i < ship.length; i++) {
        this.getInfoAtBoardCoordinates(
          allValuesOfX[i],
          allValuesOfY[i]
        ).containsShip = ship;

        if (i === 0) {
          this.allShips.push({
            shipInstance: ship,
            coordinates: [[allValuesOfX[i], allValuesOfY[i]]],
          });
        } else {
          this.allShips
            .at(-1)
            .coordinates.push([allValuesOfX[i], allValuesOfY[i]]);
        }
      }

      // Refactore this part??? Get rid of this loop here and move in inside reserveAdjacentSquares()
      for (let i = 0; i < ship.length; i++) {
        this.#reserveAdjacentSquares(
          allValuesOfX[i],
          allValuesOfY[i],
          'isAdjacentToSomeShip'
        );
      }
    } else if (ship.length === 1) {
      if (this.#standInAnotherShipAdjacentSquares(x, y)) {
        return 'Cannot place the ship right beside another ship';
      } else if (!this.#fitInBoardLimits(x, y)) {
        return 'Cannot place the ship outside the board';
      } else if (this.#confirmCoordinatesAreNotAvailable(x, y)) {
        return 'Cannot place the ship in cells taken by another ship';
      }

      this.getInfoAtBoardCoordinates(x, y).containsShip = ship;
      this.#reserveAdjacentSquares(x, y, 'isAdjacentToSomeShip');
      this.allShips.push({ shipInstance: ship, coordinates: [x, y] });
    }
  }

  #targetCoordinatesOutsideBoard(arrayWithCoordinates) {
    const attackIsOutsideBoard = arrayWithCoordinates.filter((coordinate) => {
      return coordinate > 9 || coordinate < 0;
    });

    if (attackIsOutsideBoard.length) {
      return true;
    } else {
      return false;
    }
  }

  #confirmSquareHasBeenTargettedAlready(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).hasBeenTargetted) {
      return true;
    } else {
      return false;
    }
  }

  #confirmSquareIsDisabledByAnotherShip(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeSunkShip) {
      return true;
    } else {
      return false;
    }
  }

  #findTargettedShip(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    const isTargettedShip = this.getInfoAtBoardCoordinates(x, y).containsShip;
    if (isTargettedShip) {
      return true;
    } else {
      return false;
    }
  }

  #checkGameState() {
    if (
      this.allShips.length === this.sunkShips.length &&
      this.allShips.length &&
      this.sunkShips.length
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Add comments to clarify some parts below...
  receiveAttack(...pairOfCoordinates) {
    const arrayWithCoordinates = pairOfCoordinates;
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.#checkGameState()) {
      return 'Game over';
    } else if (this.#targetCoordinatesOutsideBoard(arrayWithCoordinates)) {
      return 'Cannot target non-existent coordinates';
    } else if (
      this.#confirmSquareHasBeenTargettedAlready(arrayWithCoordinates)
    ) {
      return 'Coordinates have been targetted already';
    } else if (
      this.#confirmSquareIsDisabledByAnotherShip(arrayWithCoordinates)
    ) {
      return 'Another sunk ship has made these coordinates unavailable';
    }

    // Target the provided square successfully
    this.getInfoAtBoardCoordinates(x, y).hasBeenTargetted = true;

    if (this.#findTargettedShip(arrayWithCoordinates)) {
      this.getSpecificShip(x, y).hit();

      if (this.getSpecificShip(x, y).isSunk()) {
        const ship = this.getSpecificShip(x, y);
        this.sunkShips.push(ship);
        const shipSquares = this.getSpecificShip(x, y, 'coordinates');

        if (ship.length === 1) {
          this.#reserveAdjacentSquares(
            shipSquares[0],
            shipSquares[1],
            'isAdjacentToSomeSunkShip'
          );
        } else {
          for (let i = 0; i < shipSquares.length; i++) {
            this.#reserveAdjacentSquares(
              shipSquares[i][0],
              shipSquares[i][1],
              'isAdjacentToSomeSunkShip'
            );
          }
        }
      }
    } else {
      this.getInfoAtBoardCoordinates(x, y).isMissedShot = true;
    }
  }

  getInfoAtBoardCoordinates(x, y) {
    return this.board.at(x).at(y).at(0);
  }

  getAllShips() {
    return this.allShips;
  }

  getSunkShipsProperty() {
    return this.sunkShips;
  }

  getSpecificShip(x, y, property = 'shipInstance') {
    const ship = this.getAllShips().filter((item) => {
      if (!Array.isArray(item.coordinates[0])) {
        return item.coordinates[0] === x && item.coordinates[1] === y
          ? true
          : false;
      } else {
        for (let i = 0; i < item.coordinates.length; i++) {
          if (item.coordinates[i][0] === x && item.coordinates[i][1] === y) {
            return true;
          }
        }
        return false;
      }
    });

    return ship[0][property];
  }
}
