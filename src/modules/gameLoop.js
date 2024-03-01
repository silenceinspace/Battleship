import { Gameboard } from './gameboard';
import { Player, Computer } from './player';
export { GameLoop };

class GameLoop {
  constructor() {
    this.humanBoard = this.#populateBoardWithShips('Human');
    this.computerBoard = this.#populateBoardWithShips('Computer');
    this.playerOne = new Player('Human', this.humanBoard, this.computerBoard);
    this.playerTwo = new Computer(
      'Computer',
      this.computerBoard,
      this.humanBoard
    );
    this.attacksNow = this.playerOne;
    this.thereIsAWinner = null;
    this.coordinatesForComputerToTarget = null;
  }

  // Place 10 ships at pretedermined coodinates for now
  #populateBoardWithShips(player) {
    const board = new Gameboard();

    if (player === 'Human') {
      board.placeShip(1, 0, 1);
      board.placeShip(2, 9, 1);
      board.placeShip(5, 9, 1);
      board.placeShip(9, 9, 1);
      board.placeShip(7, 0, 2, 'hor');
      board.placeShip(4, 4, 2, 'ver');
      board.placeShip(6, 4, 2, 'ver');
      board.placeShip(3, 0, 3, 'hor');
      board.placeShip(9, 2, 3, 'ver');
      board.placeShip(0, 3, 4, 'ver');
    } else if (player === 'Computer') {
      board.placeShip(0, 0, 1);
      board.placeShip(9, 9, 1);
      board.placeShip(0, 9, 1);
      board.placeShip(9, 0, 1);
      board.placeShip(2, 2, 2, 'ver');
      board.placeShip(4, 2, 2, 'ver');
      board.placeShip(6, 2, 2, 'hor');
      board.placeShip(0, 5, 3, 'hor');
      board.placeShip(4, 5, 3, 'hor');
      board.placeShip(8, 4, 4, 'ver');
    }

    return board;
  }

  #passTurns() {
    this.attacksNow.name === 'Human'
      ? (this.attacksNow = this.playerTwo)
      : (this.attacksNow = this.playerOne);
  }

  #findBoardWithGameOver() {
    if (this.humanBoard.gameOver) {
      this.thereIsAWinner = this.playerTwo.name;
      return true;
    } else if (this.computerBoard.gameOver) {
      this.thereIsAWinner = this.playerOne.name;
      return true;
    } else {
      return false;
    }
  }

  makeMove(...coordinates) {
    if (this.thereIsAWinner) {
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
    return this.thereIsAWinner;
  }

  getHumanBoard() {
    return this.humanBoard.board;
  }

  getComputerBoard() {
    return this.computerBoard.board;
  }

  getPlayerOneSunkShips() {
    return this.playerOne.ownBoard.getSunkShipsProperty();
  }

  getPlayerTwoSunkShips() {
    return this.playerTwo.ownBoard.getSunkShipsProperty();
  }

  // Helper functions for computer smart moves
  getPlayerOneAllShips() {
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
