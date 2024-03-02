import { Gameboard } from './gameboard';
import { Player, Computer } from './player';
export { GameLoop };

class GameLoop {
  constructor() {
    this.humanBoard = this.#populateBoardWithShips();
    this.computerBoard = this.#populateBoardWithShips();
    this.playerOne = new Player('Human', this.humanBoard, this.computerBoard);
    this.playerTwo = new Computer(
      'Computer',
      this.computerBoard,
      this.humanBoard
    );
    this.attacksNow = this.playerOne;
    this.winner = null;
    this.coordinatesForComputerToTarget = null;
  }

  // Place 10 ships at pretedermined coodinates for now
  #populateBoardWithShips() {
    const board = new Gameboard();

    let lengthOne = 0;
    let lengthTwo = 0;
    let lengthThree = 0;
    let lengthFour = 0;

    while (lengthFour === 0) {
      const [x, y, direction] = this.#generateValuesToPlaceShip();
      const isPlaced = board.placeShip(x, y, 4, direction);
      if (isPlaced) {
        lengthFour++;
      }
    }

    while (lengthThree !== 2) {
      const [x, y, direction] = this.#generateValuesToPlaceShip();
      const isPlaced = board.placeShip(x, y, 3, direction);
      if (isPlaced) {
        lengthThree++;
      }
    }

    while (lengthTwo !== 3) {
      const [x, y, direction] = this.#generateValuesToPlaceShip();
      const isPlaced = board.placeShip(x, y, 2, direction);
      if (isPlaced) {
        lengthTwo++;
      }
    }

    while (lengthOne !== 4) {
      const [x, y, direction] = this.#generateValuesToPlaceShip();
      const isPlaced = board.placeShip(x, y, 1, direction);
      if (isPlaced) {
        lengthOne++;
      }
    }

    return board;
  }

  #generateValuesToPlaceShip() {
    const directions = ['ver', 'hor'];
    const index = Math.floor(Math.random() * 2);
    const randomDirection = directions[index];
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const values = [];
    values.push(x, y, randomDirection);
    return values;
  }

  #passTurns() {
    this.attacksNow.name === 'Human'
      ? (this.attacksNow = this.playerTwo)
      : (this.attacksNow = this.playerOne);
  }

  #findBoardWithGameOver() {
    if (this.humanBoard.gameOver) {
      this.winner = this.playerTwo.name;
      return true;
    } else if (this.computerBoard.gameOver) {
      this.winner = this.playerOne.name;
      return true;
    } else {
      return false;
    }
  }

  makeMove(...coordinates) {
    if (this.winner) {
      return false;
    }

    if (this.attacksNow.name === 'Human') {
      const move = coordinates[0];
      const x = move[0];
      const y = move[1];
      if (!this.playerOne.attackOpponent(x, y)) {
        return false;
      }

      if (!this.#findBoardWithGameOver()) {
        this.#passTurns();
      }
      return true;
    }

    if (this.attacksNow.name === 'Computer') {
      let computerMove;
      // Destructuring array assignment
      // By default computer make random moves but if it hits something, then it will try to sink the ship until it succeeds
      if (coordinates[0]) {
        const [x, y] = coordinates[0];
        computerMove = this.playerTwo.attackOpponent(x, y);
        if (!computerMove) return false;

        if (!this.#findBoardWithGameOver()) {
          this.#passTurns();
        }
        return `${x}${y}`;
      } else {
        computerMove = this.playerTwo.attackOpponent();
        if (!this.#findBoardWithGameOver()) {
          this.#passTurns();
        }
        return computerMove.join('');
      }
    }
  }

  getWhoseTurnItIs() {
    return this.attacksNow.name;
  }

  getWinner() {
    return this.winner;
  }

  getBoardOf(name) {
    if (name === 'Human') {
      return this.humanBoard.board;
    } else if (name === 'Computer') {
      return this.computerBoard.board;
    }
  }

  getSunkShipsOf(name) {
    if (name === 'Human') {
      return this.playerOne.ownBoard.getSunkShipsProperty();
    } else if (name === 'Computer') {
      return this.playerTwo.ownBoard.getSunkShipsProperty();
    }
  }

  changeShipsLocations() {
    this.humanBoard = this.#populateBoardWithShips();
    this.playerOne = new Player('Human', this.humanBoard, this.computerBoard);
    this.playerTwo = new Computer(
      'Computer',
      this.computerBoard,
      this.humanBoard
    );
  }

  // Helper functions for computer smart moves
  getHumanAllShips() {
    return this.playerOne.ownBoard.getAllShips();
  }

  getCoordinatesOfPreviouslyHitShip() {
    return this.coordinatesForComputerToTarget;
  }

  saveCoordinatesOfPreviouslyHitShip(coordinates) {
    this.coordinatesForComputerToTarget = coordinates;
  }

  updateCoordinatesOfPreviouslyHitShip(coordinates) {
    if (
      !this.coordinatesForComputerToTarget ||
      this.coordinatesForComputerToTarget.length === 1
    ) {
      this.coordinatesForComputerToTarget = null;
    } else {
      this.coordinatesForComputerToTarget =
        this.coordinatesForComputerToTarget.filter((square) => {
          return coordinates !== square.join('');
        });
    }
  }
}
