import { Gameboard } from '../modules/gameboard';
import { Player } from '../modules/player';

describe('Player objects are instantiated and hold two boards', () => {
  test('Human player can attack computers board', () => {
    const humanBoard = new Gameboard();
    const computerBoard = new Gameboard();
    const human = new Player('Human', humanBoard, computerBoard);
    expect(
      computerBoard.getInfoAtBoardCoordinates(0, 0).hasBeenTargetted
    ).toBeFalsy();
    expect(
      computerBoard.getInfoAtBoardCoordinates(9, 3).hasBeenTargetted
    ).toBeFalsy();

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
    const computer = new Player('Computer', computerBoard, humanBoard);

    const firstAttack = computer.attackOpponent();
    const secondAttack = computer.attackOpponent();
    const thirdAttack = computer.attackOpponent();

    expect(
      humanBoard.getInfoAtBoardCoordinates(firstAttack[0], firstAttack[1])
        .hasBeenTargetted
    ).toBeTruthy();
    expect(
      humanBoard.getInfoAtBoardCoordinates(secondAttack[0], secondAttack[1])
        .hasBeenTargetted
    ).toBeTruthy();
    expect(
      humanBoard.getInfoAtBoardCoordinates(thirdAttack[0], thirdAttack[1])
        .hasBeenTargetted
    ).toBeTruthy();
  });
});
