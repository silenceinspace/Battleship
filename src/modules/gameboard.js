import { Ship } from './ship';
export { Gameboard };

class Gameboard {
  constructor() {
    this.board = this.#createGameboard();
    this.allShips = 0;
    this.sunkShips = 0;
  }

  #createGameboard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        // Create an object in each square of the board to control its future flow
        board[i].push([
          {
            containsShip: false,
            adjacentToNearestShip: false,
            missed: false,
            adjacentToSunkShip: false,
            targetted: false,
          },
        ]);
      }
    }
    return board;
  }

  #fitInBoardLimits(...coordinates) {
    const arrayWithArguments = coordinates;
    const coordinateX = arrayWithArguments[0];
    const coordinateY = arrayWithArguments[1];

    // Check limits of ships of length 1 as well as 2,3,4 (the latter will be created with coordinate combinations in two arrays)
    if (Array.isArray(coordinateX) && Array.isArray(coordinateY)) {
      const xIsOutsideBoard = coordinateX.filter((x) => x > 9);
      const yIsOutsideBoard = coordinateY.filter((y) => y > 9);
      if (xIsOutsideBoard.length || yIsOutsideBoard.length) {
        return false;
      } else {
        return true;
      }
    }

    if (
      coordinateX > 9 ||
      coordinateY > 9 ||
      coordinateX < 0 ||
      coordinateY < 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  #reserveAdjacentCoordinates(...coordinates) {
    const arrayWithArguments = coordinates;
    const coordinateX = arrayWithArguments[0];
    const coordinateY = arrayWithArguments[1];

    // Use two arrays filled with all possible adjacent squares of the coordinates
    const adjacentCoordinatesOfX = [-1, 0, 1, 1, 1, 0, -1, -1];
    const adjacentCoordinatesOfY = [-1, -1, -1, 0, 1, 1, 1, 0];

    for (let i = 0; i < 8; i++) {
      const x = coordinateX + adjacentCoordinatesOfX[i];
      const y = coordinateY + adjacentCoordinatesOfY[i];

      if (x > 9 || y > 9 || x < 0 || y < 0) {
        continue;
      } else if (this.board.at(x).at(y).at(0).containsShip) {
        // If the square is a part of the ship, its continuation, it's not adjacent. It contains a ship
        continue;
      } else {
        this.board.at(x).at(y).at(0).adjacentToNearestShip = true;
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

  #enterAnotherShipCoordinates(...coordinates) {
    const resultOfHelper = this.#accessPropertyOnShipObject(
      coordinates,
      'adjacentToNearestShip'
    );
    return resultOfHelper;
  }

  // Use the rest operator to place all arguments into one array and then extract specific parts of it
  #accessPropertyOnShipObject(...coordinatesAndProperty) {
    const arrayWithArguments = coordinatesAndProperty;
    const coordinateX = arrayWithArguments[0][0];
    const coordinateY = arrayWithArguments[0][1];
    const property = arrayWithArguments[1];

    let willCancelShipCreation;
    if (Array.isArray(coordinateX) && Array.isArray(coordinateY)) {
      for (let i = 0; i < coordinateX.length; i++) {
        willCancelShipCreation = this.board
          .at(coordinateX[i])
          .at(coordinateY[i])
          .at(0)[property]; // Access a property on the ship with which the method was called

        if (willCancelShipCreation) {
          return true;
        }
      }
      return false;
    } else {
      willCancelShipCreation = this.board.at(coordinateX).at(coordinateY).at(0)[
        property
      ];

      if (willCancelShipCreation) {
        return true;
      } else {
        return false;
      }
    }
  }

  placeShip(x, y, shipSize, direction = 'hor') {
    const ship = new Ship(shipSize);

    if (this.allShips >= 10) {
      return 'There are 10 ships on the board. The limit is reached.';
    } else if (ship.length < 1 || ship.length > 4) {
      return 'Cannot place a ship of this length. Min length is 1. Max length is 4.';
    }

    if (ship.length > 1) {
      // Create two arrays to place ships over multiple squares, doing it in both directions.
      const shiftedX = [];
      const shiftedY = [];

      // If placed horizontally, the ship's first square will generate the rest of squares to the right, without changing the row
      if (direction === 'hor') {
        for (let i = 0; i < ship.length; i++) {
          shiftedX.push(x);
          shiftedY.push(y);
          x += 1;
        }
        // If placed vertically, the ship's first square will generate the rest of squares below, without changing the column
      } else if (direction === 'ver') {
        for (let i = 0; i < ship.length; i++) {
          shiftedX.push(x);
          shiftedY.push(y);
          y += 1;
        }
      }

      // Check if any of these restrictions is broken before placing a ship. If yes, the ship is not placed on the board
      if (!this.#fitInBoardLimits(shiftedX, shiftedY)) {
        return 'Cannot place the ship outside the board';
      } else if (this.#confirmCoordinatesAreNotAvailable(shiftedX, shiftedY)) {
        return 'Cannot place the ship in cells taken by another ship';
      } else if (this.#enterAnotherShipCoordinates(shiftedX, shiftedY)) {
        return 'Cannot place the ship right beside another ship';
      }

      // Make sure there is one square of a gap between two ships (in all directions)
      for (let i = 0; i < ship.length; i++) {
        this.board.at(shiftedX[i]).at(shiftedY[i]).at(0).containsShip = ship;
      }

      // Refactore this part???
      // Get rid of this loop here and move in inside reserveAdjacentCoordinates()
      for (let i = 0; i < ship.length; i++) {
        this.#reserveAdjacentCoordinates(shiftedX[i], shiftedY[i]);
      }
    } else if (ship.length === 1) {
      if (this.#enterAnotherShipCoordinates(x, y)) {
        return 'Cannot place the ship right beside another ship';
      } else if (!this.#fitInBoardLimits(x, y)) {
        return 'Cannot place the ship outside the board';
      } else if (this.#confirmCoordinatesAreNotAvailable(x, y)) {
        return 'Cannot place the ship in cells taken by another ship';
      }

      this.board.at(x).at(y).at(0).containsShip = ship;
      this.#reserveAdjacentCoordinates(x, y);
    }

    this.allShips += 1;
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

  #confirmCoordinatesWereTargettedAlready(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.board.at(x).at(y).at(0).targetted) return true;
    else return false;
  }

  #targetShip(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    let isTargettedShip = this.board.at(x).at(y).at(0).containsShip;
    if (isTargettedShip) {
      return true;
    } else return false;
  }

  receiveAttack(...pairOfCoordinates) {
    const arrayWithCoordinates = pairOfCoordinates;
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.#targetCoordinatesOutsideBoard(arrayWithCoordinates)) {
      return 'Cannot target non-existent coordinates';
    } else if (
      this.#confirmCoordinatesWereTargettedAlready(arrayWithCoordinates)
    ) {
      return 'Coordinates have been targetted already';
    }

    // Target the provided square successfully
    this.board.at(x).at(y).at(0).targetted = true;

    if (this.#targetShip(arrayWithCoordinates)) {
      // Don't forget!!!
      // hit() is going to be called here
      return 'Ship was targetted';
    } else {
      this.board.at(x).at(y).at(0).missed = true;
      return 'Missed shot';
    }
  }
}
