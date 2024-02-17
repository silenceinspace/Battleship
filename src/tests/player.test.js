import { Gameboard } from '../modules/gameboard';
import { Player, Computer } from '../modules/player';

describe('Player objects are instantiated and hold two boards', () => {
  test('Human player can attack computers board', () => {
    const humanBoard = new Gameboard();
    const computerBoard = new Gameboard();
    const human = new Player('Human', humanBoard, computerBoard);

    human.attackOpponent(0, 0);
    human.attackOpponent(9, 3);

    expect(
      computerBoard.getInfoAtBoardCoordinates(0, 0).hasBeenTargetted
    ).toBeTruthy();
    expect(
      computerBoard.getInfoAtBoardCoordinates(9, 3).hasBeenTargetted
    ).toBeTruthy();
  });

  test('Computer can attack players board', () => {
    const humanBoard = new Gameboard();
    const computerBoard = new Gameboard();
    const computer = new Computer('Computer', computerBoard, humanBoard);

    const firstAttack = computer.attackOpponent();
    const secondAttack = computer.attackOpponent();

    expect(
      humanBoard.getInfoAtBoardCoordinates(firstAttack[0], firstAttack[1])
        .hasBeenTargetted
    ).toBeTruthy();
    expect(
      humanBoard.getInfoAtBoardCoordinates(secondAttack[0], secondAttack[1])
        .hasBeenTargetted
    ).toBeTruthy();
  });

  test('Computer can make all 100 possible moves', () => {
    const humanBoard = new Gameboard();
    const computerBoard = new Gameboard();
    const computer = new Computer('Computer', computerBoard, humanBoard);

    for (let i = 0; i < 100; i++) {
      computer.attackOpponent();
    }

    expect(computer.getLengthOfPossibleMovesArray()).toBe(0);
  });

  test('Computer cannot make a move if all possible moves have been used', () => {
    const humanBoard = new Gameboard();
    const computerBoard = new Gameboard();
    const computer = new Computer('Computer', computerBoard, humanBoard);

    for (let i = 0; i < 100; i++) {
      computer.attackOpponent();
    }

    expect(computer.attackOpponent()).toBe('There are no possible moves left');
  });
});
