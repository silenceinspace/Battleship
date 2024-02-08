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
        board[i].push([
          {
            containsShip: false,
            adjacentToNearestShip: false,
            missed: false,
            adjacentToSunkShip: false,
          },
        ]);
      }
    }
    return board;
  }

  #fitInBoardLimits(coordinateX, coordinateY) {
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

  #reserveAdjacentCoordinates(coordinateX, coordinateY) {
    const adjacentCoordinatesOfX = [-1, 0, 1, 1, 1, 0, -1, -1];
    const adjacentCoordinatesOfY = [-1, -1, -1, 0, 1, 1, 1, 0];

    for (let i = 0; i < 8; i++) {
      const x = coordinateX + adjacentCoordinatesOfX[i];
      const y = coordinateY + adjacentCoordinatesOfY[i];

      // Also if it tries to "reserve" coordinates that belong to the same ship, don't
      if (x > 9 || y > 9 || x < 0 || y < 0) {
        continue;
      } else if (this.board.at(x).at(y).at(0).containsShip) {
        continue;
      } else {
        this.board.at(x).at(y).at(0).adjacentToNearestShip = true;
      }
    }
  }

  #confirmCoordinatesAreNotAvailable(coordinateX, coordinateY) {
    let areNotAvailableCoordinates;
    if (Array.isArray(coordinateX) && Array.isArray(coordinateY)) {
      for (let i = 0; i < coordinateX.length; i++) {
        areNotAvailableCoordinates = this.board
          .at(coordinateX[i])
          .at(coordinateY[i])
          .at(0).containsShip;

        if (areNotAvailableCoordinates) {
          return true;
        }
      }
      return false;
    } else {
      areNotAvailableCoordinates = this.board
        .at(coordinateX)
        .at(coordinateY)
        .at(0).containsShip;

      if (areNotAvailableCoordinates) {
        return true;
      } else {
        return false;
      }
    }
  }

  #enterAnotherShipCoordinates(coordinateX, coordinateY) {
    let areReservedCoordinates;
    if (Array.isArray(coordinateX) && Array.isArray(coordinateY)) {
      for (let i = 0; i < coordinateX.length; i++) {
        areReservedCoordinates = this.board
          .at(coordinateX[i])
          .at(coordinateY[i])
          .at(0).adjacentToNearestShip;

        if (areReservedCoordinates) {
          return true;
        }
      }
      return false;
    } else {
      areReservedCoordinates = this.board
        .at(coordinateX)
        .at(coordinateY)
        .at(0).adjacentToNearestShip;

      if (areReservedCoordinates) {
        return true;
      } else {
        return false;
      }
    }
  }

  placeShip(x, y, shipSize, direction = 'hor') {
    if (!this.#fitInBoardLimits(x, y)) {
      return 'Cannot place the ship outside the board';
    }

    if (this.#confirmCoordinatesAreNotAvailable(x, y)) {
      return 'Cannot place the ship in cells taken by another ship';
    }

    const ship = new Ship(shipSize);
    if (ship.length > 1) {
      const shiftedX = [];
      const shiftedY = [];

      if (direction === 'hor') {
        for (let i = 0; i < ship.length; i++) {
          shiftedX.push(x);
          shiftedY.push(y);
          x += 1;
        }
      } else if (direction === 'ver') {
        for (let i = 0; i < ship.length; i++) {
          shiftedX.push(x);
          shiftedY.push(y);
          y += 1;
        }
      }

      if (!this.#fitInBoardLimits(shiftedX, shiftedY)) {
        return 'Cannot place the ship outside the board';
      }

      if (this.#confirmCoordinatesAreNotAvailable(shiftedX, shiftedY)) {
        return 'Cannot place the ship in cells taken by another ship';
      }

      if (this.#enterAnotherShipCoordinates(shiftedX, shiftedY)) {
        return 'Cannot place the ship right beside another ship';
      }

      // Make sure there is a gap between two ships
      for (let i = 0; i < ship.length; i++) {
        this.board.at(shiftedX[i]).at(shiftedY[i]).at(0).containsShip = ship;
      }

      for (let i = 0; i < ship.length; i++) {
        this.#reserveAdjacentCoordinates(shiftedX[i], shiftedY[i]);
      }
    } else if (ship.length === 1) {
      if (this.#enterAnotherShipCoordinates(x, y)) {
        return 'Cannot place the ship right beside another ship';
      } else {
        this.board.at(x).at(y).at(0).containsShip = ship;
        this.#reserveAdjacentCoordinates(x, y);
      }
    }
  }
}
