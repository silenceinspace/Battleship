import { Ship } from './ship';
export { Gameboard };

class Gameboard {
  constructor() {
    this.board = this.#createGameboard();
    this.allShips = [];
    this.sunkShips = [];
    this.gameOver = false;
  }

  #createGameboard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        // In each square of the board, there is an object with a few properties to control the game's flow
        board[i].push([
          {
            containsShip: false,
            isAdjacentToSomeShip: false,
            isAdjacentToSomeSunkShip: false,
            hasBeenTargetted: false,
          },
        ]);
      }
    }
    return board;
  }

  // Helpers for placeShip()
  #fitInBoardLimits(...coordinates) {
    const arrayWithCoordinates = coordinates;
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    // Arguments of this method come in two different flavors — they can be either individual X and Y values (case with a 1-square ship), or arrays with combinations of X and Y values (case with multiple-square ships)
    // It is necessary to check only if they are greater than 9 in the context of arrays, because ships are expanded to the right/down by default — a two-square ship placed horizontally at [0,0] populates to [0,0], [1,0] and never to [0,0], [-1, 0]
    if (Array.isArray(x) && Array.isArray(y)) {
      const valuesXAndY = [...x, ...y];
      const xOrYIsOutsideBoard = valuesXAndY.filter((value) => value > 9);
      if (xOrYIsOutsideBoard.length) {
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

    // Use two arrays filled with all possible options for adjacent squares
    // A square can have 8 adjacent squares at most
    const adjacentCoordinatesOfX = [-1, 0, 1, 1, 1, 0, -1, -1];
    const adjacentCoordinatesOfY = [-1, -1, -1, 0, 1, 1, 1, 0];

    for (let i = 0; i < 8; i++) {
      const x = coordinateX + adjacentCoordinatesOfX[i];
      const y = coordinateY + adjacentCoordinatesOfY[i];

      if (x > 9 || y > 9 || x < 0 || y < 0) {
        continue;
      } else if (this.getInfoAtBoardCoordinates(x, y).containsShip) {
        continue;
      }

      if (property === 'isAdjacentToSomeShip') {
        this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeShip = true;
      } else if (property === 'isAdjacentToSomeSunkShip') {
        this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeSunkShip = true;
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
        // Access a property on the ship with which the method was called in a less hard-coded manner with a dot notation
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

  #compareAgainstLimitConditions(x, y) {
    if (!this.#fitInBoardLimits(x, y)) {
      return false;
    } else if (this.#confirmCoordinatesAreNotAvailable(x, y)) {
      return false;
    } else if (this.#standInAnotherShipAdjacentSquares(x, y)) {
      return false;
    } else {
      return true;
    }
  }

  placeShip(x, y, shipSize, direction = 'hor') {
    const ship = new Ship(shipSize);

    if (ship.length > 1) {
      const allValuesOfX = [];
      const allValuesOfY = [];

      // If placed horizontally, the ship's first square will generate the rest of squares to the right, without changing the row. If placed vertically, the ship's first square will generate the rest of squares down, without changing the column
      if (direction === 'hor') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          x += 1;
        }
      } else if (direction === 'ver') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          y += 1;
        }
      }

      if (!this.#compareAgainstLimitConditions(allValuesOfX, allValuesOfY)) {
        return false;
      }

      for (let i = 0; i < ship.length; i++) {
        this.getInfoAtBoardCoordinates(
          allValuesOfX[i],
          allValuesOfY[i]
        ).containsShip = ship;

        // Store ships inside the allShips array with their coordinates to be able to easier answer if the attacked coordinates belong to any ship
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

      // Keep reserveAdjacentSquares() in a separate loop because it is important all ships to be priorly created to reserve only truly adjacent squares. The other 2 squares of a ship with the length of 3 are not adjacent; They are a part of the ship
      for (let i = 0; i < ship.length; i++) {
        this.#reserveAdjacentSquares(
          allValuesOfX[i],
          allValuesOfY[i],
          'isAdjacentToSomeShip'
        );
      }
    } else if (ship.length === 1) {
      if (!this.#compareAgainstLimitConditions(x, y)) {
        return false;
      }

      this.getInfoAtBoardCoordinates(x, y).containsShip = ship;
      this.#reserveAdjacentSquares(x, y, 'isAdjacentToSomeShip');
      this.allShips.push({ shipInstance: ship, coordinates: [x, y] });
    }
    // Confirm that the ship has been placed successfully
    return true;
  }

  // Helpers for receiveAttack()
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

  #confirmSquaresAreNotAvailable(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).hasBeenTargetted) {
      return true;
    } else if (this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeSunkShip) {
      return true;
    } else {
      return false;
    }
  }

  #findTargettedShip(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).containsShip) {
      return true;
    } else {
      return false;
    }
  }

  #checkIfAllShipsHaveBeenDestroyed() {
    if (
      this.allShips.length === this.sunkShips.length &&
      this.allShips.length &&
      this.sunkShips.length
    ) {
      this.gameOver = true;
    }
  }

  #checkGameState() {
    if (this.gameOver) {
      return true;
    } else {
      return false;
    }
  }

  #checkIfAttackIsAllowed(arrayWithCoordinates) {
    if (this.#checkGameState()) {
      return false;
    } else if (this.#targetCoordinatesOutsideBoard(arrayWithCoordinates)) {
      return false;
    } else if (this.#confirmSquaresAreNotAvailable(arrayWithCoordinates)) {
      return false;
    } else {
      return true;
    }
  }

  receiveAttack(...pairOfCoordinates) {
    // Convert arguments to numbers because in getSpecificShip() I have strict equality to get a ship that is under attack. But from other modules coordinates are transfered as strings to keep 0's, e.g. '03'. If it was a number in the first place, JS would erase 0 and hence an X coordinate was missing
    const arrayWithCoordinates = pairOfCoordinates;
    const x = Number(arrayWithCoordinates[0]);
    const y = Number(arrayWithCoordinates[1]);

    if (!this.#checkIfAttackIsAllowed(arrayWithCoordinates)) {
      return false;
    }

    // hasBeenTargetted property implies either a successful attack (hit a ship) or a failed one (a missed shot)
    this.getInfoAtBoardCoordinates(x, y).hasBeenTargetted = true;
    if (this.#findTargettedShip(arrayWithCoordinates)) {
      const targettedShip = this.getSpecificShip(x, y);
      targettedShip.hit();

      if (targettedShip.isSunk()) {
        this.sunkShips.push(targettedShip);
        const shipSquares = this.getSpecificShip(x, y, 'coordinates');

        // Squares around a sunk ship are not possible for attacks because they cannot contain another ship based on the rules of ships' placing — there must be a one-square gap between two different ships
        if (targettedShip.length === 1) {
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
        // Gameboard should keep track of its termination state because GameLoop will rely on it later. If one board has gameOver property set to true, then there must be a winner too
        this.#checkIfAllShipsHaveBeenDestroyed();
      }
    }
    // It is important to return true here because this boolean is carried through multiple modules. For example, a computer's move might not be legal in the scenario when out of possibleMoves array it chooses one which is restricted by adjacentToSomeSunkShip property. These moves are not removed from the list of possible computer moves when the ship has been sunk, so they could be picked but are not going to register an attack
    return true;
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
    // Array allShips is an array featuring objects with the 'shipInstance' and 'coordinates' properties
    // If inside 'shipInstance' there is a ship with the length of 1, then its coordinates are stored inside a single array — [...]
    // However, if it's a longer ship, then a few different coordinates are associated with the ship and attacking any of them should hit that ship. In that case, store individual coordinates inside another array — [[...], [...]]
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
