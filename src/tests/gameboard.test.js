// import { Ship } from './ship';
import { Gameboard } from '../modules/gameboard';

describe('Test public interface of a gameboard', () => {
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
});
