// import { Ship } from './ship';
import { Gameboard } from '../modules/gameboard';

describe.skip('Test the public placeShip() method of the gameboard', () => {
  test('placeShip() places a ship with the length of 1 inside the correct coordinates', () => {
    const gameboard = new Gameboard();

    expect(gameboard.board.at(0).at(0).at(0).containsShip).toBeFalsy();
    gameboard.placeShip(0, 0, 1);

    expect(gameboard.board.at(0).at(0).at(0).containsShip).toBeTruthy();
  });

  test('placeShip() places a ship with the length of > 1 inside the correct coodinates', () => {
    const gameboard = new Gameboard();

    expect(gameboard.board.at(3).at(4).at(0).containsShip).toBeFalsy();
    gameboard.placeShip(3, 4, 3);

    expect(gameboard.board.at(3).at(4).at(0).containsShip).toBeTruthy();
    expect(gameboard.board.at(4).at(4).at(0).containsShip).toBeTruthy();
    expect(gameboard.board.at(5).at(4).at(0).containsShip).toBeTruthy();
  });

  test('placeShip() places a ship in both directions: horizontally and vertically', () => {
    const gameboard = new Gameboard();

    expect(gameboard.board.at(0).at(7).at(0).containsShip).toBeFalsy();
    gameboard.placeShip(0, 7, 2, 'ver');

    expect(gameboard.board.at(1).at(7).at(0).containsShip).toBeFalsy();
    expect(gameboard.board.at(0).at(7).at(0).containsShip).toBeTruthy();
    expect(gameboard.board.at(0).at(8).at(0).containsShip).toBeTruthy();
  });

  test('placeShip() cannot place ships outside the board', () => {
    const gameboard = new Gameboard();

    expect(gameboard.placeShip(-1, -1, 1)).toBe(
      'Cannot place the ship outside the board'
    );
    expect(gameboard.placeShip(9, 0, 3, 'hor')).toBe(
      'Cannot place the ship outside the board'
    );
    expect(gameboard.placeShip(0, 9, 2, 'ver')).toBe(
      'Cannot place the ship outside the board'
    );
  });

  test('placeShip() cannot place a ship in squares occupied by another ship', () => {
    const gameboard = new Gameboard();

    gameboard.placeShip(0, 0, 1);
    expect(gameboard.placeShip(0, 0, 3)).toBe(
      'Cannot place the ship in cells taken by another ship'
    );

    gameboard.placeShip(3, 4, 3);
    expect(gameboard.placeShip(5, 4, 1)).toBe(
      'Cannot place the ship in cells taken by another ship'
    );

    gameboard.placeShip(0, 7, 2);
    expect(gameboard.placeShip(0, 5, 4, 'ver')).toBe(
      'Cannot place the ship in cells taken by another ship'
    );
  });

  test('placeShip() cannot place ships next to each other. Min gap must be 1 cell', () => {
    const gameboard = new Gameboard();

    gameboard.placeShip(0, 0, 1);
    expect(gameboard.placeShip(1, 1, 4)).toBe(
      'Cannot place the ship right beside another ship'
    );

    gameboard.placeShip(3, 4, 3, 'hor');
    expect(gameboard.placeShip(3, 5, 1)).toBe(
      'Cannot place the ship right beside another ship'
    );

    gameboard.placeShip(8, 8, 2, 'ver');
    expect(gameboard.placeShip(8, 5, 3, 'ver')).toBe(
      'Cannot place the ship right beside another ship'
    );
  });

  test('placeShip() cannot place ships of length greater than 4 or smaller than 1', () => {
    const gameboard = new Gameboard();

    expect(gameboard.placeShip(1, 1, 0)).toBe(
      'Cannot place a ship of this length. Min length is 1. Max length is 4.'
    );

    expect(gameboard.placeShip(3, 3, 5)).toBe(
      'Cannot place a ship of this length. Min length is 1. Max length is 4.'
    );
  });

  test('placeShip() cannot place more than 10 ships on the board', () => {
    const gameboard = new Gameboard();
    expect(gameboard.allShips).toBe(0);

    let coordinateOfX = 0;
    let coordinateOfY = 0;
    let timesWillRun = 10;
    while (timesWillRun) {
      gameboard.placeShip(coordinateOfX, coordinateOfY, 1);
      coordinateOfX += 2;
      timesWillRun--;

      if (timesWillRun === 5) {
        coordinateOfX = 0;
        coordinateOfY = 3;
      }
    }

    expect(gameboard.allShips).toBe(10);
    expect(gameboard.placeShip(0, 6, 1)).toBe(
      'There are 10 ships on the board. The limit is reached.'
    );
  });
});

describe('Test the public receiveAttack() method of the gameboard', () => {
  test('receiveAttack() targets specific coordinates of the board', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board.at(0).at(0).at(0).targetted).toBeFalsy();

    gameboard.receiveAttack(0, 0);
    expect(gameboard.board.at(0).at(0).at(0).targetted).toBeTruthy();
  });
});
