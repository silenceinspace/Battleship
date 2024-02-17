import { Gameboard } from './gameboard';
import { Player, Computer } from './player';
export { GameLoop };

class GameLoop {
  constructor() {
    this.thereIsAWinner = false;
    this.attacksNow = this.playerOne;
    this.humanBoard = this.#populateBoardWithShips();
    this.computerBoard = this.#populateBoardWithShips();
    this.playerOne = new Player('Human', this.humanBoard, this.computerBoard);
    this.playerTwo = new Computer(
      'Computer',
      this.computerBoard,
      this.humanBoard
    );
  }

  #populateBoardWithShips() {
    const board = new Gameboard();

    // Place 10 ships at pretedermined coodinates
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
}
