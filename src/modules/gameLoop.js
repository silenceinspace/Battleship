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
    this.thereIsAWinner = null;
  }

  // Place 10 ships at pretedermined coodinates for now
  #populateBoardWithShips() {
    const board = new Gameboard();

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
      return 'Game over';
    }

    if (this.attacksNow.name === 'Human') {
      const move = coordinates[0];
      const x = Number(move[0]);
      const y = Number(move[1]);
      console.log(`Attacking at [${x}, ${y}]`);
      if (this.playerOne.attackOpponent(x, y) !== 'Success') {
        console.log('Move failed. Try again.');
        return false;
      }
    } else if (this.attacksNow.name === 'Computer') {
      this.playerTwo.attackOpponent();
    }

    // Immediately terminate the game here if there is a board with "gameOver" set to true
    if (this.#findBoardWithGameOver()) {
      return;
    }

    this.#passTurns();
    return true;
  }

  getWhoseTurnItIs() {
    return this.attacksNow.name;
  }

  getWinner() {
    return this.thereIsAWinner;
  }

  // getOwnBoard(player) {
  //   if (player === 'Human') {
  //     return this.humanBoard;
  //   } else if (player === 'Computer') {
  //     return this.computerBoard;
  //   }
  // }

  // getEnemyBoard(player) {
  //   if (player === 'Human') {
  //     return this.computerBoard;
  //   } else if (player === 'Computer') {
  //     return this.humanBoard;
  //   }
  // }
}
