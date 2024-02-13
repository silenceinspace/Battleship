// import { Ship } from '../modules/ship';
import { Gameboard } from '../modules/gameboard';

describe('Test the public placeShip() method of the gameboard', () => {
  test('placeShip() places a ship with the length of 1 inside the correct coordinates', () => {
    // Arrange
    const gameboard = new Gameboard();
    expect(gameboard.getInfoAtBoardCoordinates(0, 0).containsShip).toBeFalsy();

    // Act
    gameboard.placeShip(0, 0, 1);

    // Assert
    expect(gameboard.getInfoAtBoardCoordinates(0, 0).containsShip).toBeTruthy();
  });

  test('placeShip() places a ship with the length of > 1 inside the correct coodinates', () => {
    const gameboard = new Gameboard();
    expect(gameboard.getInfoAtBoardCoordinates(3, 4).containsShip).toBeFalsy();

    gameboard.placeShip(3, 4, 3);

    expect(gameboard.getInfoAtBoardCoordinates(3, 4).containsShip).toBeTruthy();
    expect(gameboard.getInfoAtBoardCoordinates(4, 4).containsShip).toBeTruthy();
    expect(gameboard.getInfoAtBoardCoordinates(5, 4).containsShip).toBeTruthy();
  });

  test('placeShip() places a ship in both directions: horizontally and vertically', () => {
    const gameboard = new Gameboard();
    expect(gameboard.getInfoAtBoardCoordinates(0, 7).containsShip).toBeFalsy();

    gameboard.placeShip(0, 7, 2, 'ver');

    expect(gameboard.getInfoAtBoardCoordinates(1, 7).containsShip).toBeFalsy();
    expect(gameboard.getInfoAtBoardCoordinates(0, 7).containsShip).toBeTruthy();
    expect(gameboard.getInfoAtBoardCoordinates(0, 8).containsShip).toBeTruthy();
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
    gameboard.placeShip(3, 4, 3);
    gameboard.placeShip(0, 7, 2);

    expect(gameboard.placeShip(0, 0, 3)).toBe(
      'Cannot place the ship in squares taken by another ship'
    );
    expect(gameboard.placeShip(5, 4, 1)).toBe(
      'Cannot place the ship in squares taken by another ship'
    );
    expect(gameboard.placeShip(0, 5, 4, 'ver')).toBe(
      'Cannot place the ship in squares taken by another ship'
    );
  });

  test('placeShip() cannot place ships next to each other. Min gap must be 1 square', () => {
    const gameboard = new Gameboard();

    gameboard.placeShip(0, 0, 1);
    gameboard.placeShip(3, 4, 3, 'hor');
    gameboard.placeShip(8, 8, 2, 'ver');

    expect(gameboard.placeShip(1, 1, 4)).toBe(
      'Cannot place the ship right beside another ship'
    );
    expect(gameboard.placeShip(3, 5, 1)).toBe(
      'Cannot place the ship right beside another ship'
    );
    expect(gameboard.placeShip(8, 5, 3, 'ver')).toBe(
      'Cannot place the ship right beside another ship'
    );
  });

  test('placeShip() cannot place ships of length greater than 4 or smaller than 1', () => {
    const gameboard = new Gameboard();

    expect(gameboard.placeShip(1, 1, 0)).toBe(
      'Cannot place a ship of this length. Min length is 1. Max length is 4'
    );

    expect(gameboard.placeShip(3, 3, 5)).toBe(
      'Cannot place a ship of this length. Min length is 1. Max length is 4'
    );
  });

  test('placeShip() cannot place more than 10 ships on the board', () => {
    const gameboard = new Gameboard();
    expect(gameboard.getAllShips().length).toBe(0);

    let x = 0;
    let y = 0;
    let counter = 10;
    while (counter) {
      gameboard.placeShip(x, y, 1);
      x += 2;
      counter--;

      if (counter === 5) {
        x = 0;
        y = 3;
      }
    }

    expect(gameboard.getAllShips().length).toBe(10);
    expect(gameboard.placeShip(0, 6, 1)).toBe(
      'There are 10 ships on the board. The limit is reached'
    );
  });
});

// ***
// Visual break
// ***

describe('Test the public receiveAttack() method of the gameboard', () => {
  test('receiveAttack() cannot targer coordinates outside the board', () => {
    const gameboard = new Gameboard();

    expect(gameboard.receiveAttack(-1, -5)).toBe(
      'Cannot target non-existent coordinates'
    );
    expect(gameboard.receiveAttack(10, 5)).toBe(
      'Cannot target non-existent coordinates'
    );
  });

  test('receiveAttack() targets specific coordinates of the board, which can either target a ship or turn out missed shots', () => {
    const gameboard = new Gameboard();
    expect(
      gameboard.getInfoAtBoardCoordinates(0, 0).hasBeenTargetted
    ).toBeFalsy();
    expect(
      gameboard.getInfoAtBoardCoordinates(5, 7).hasBeenTargetted
    ).toBeFalsy();

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(5, 7);

    expect(
      gameboard.getInfoAtBoardCoordinates(0, 0).hasBeenTargetted
    ).toBeTruthy();
    expect(
      gameboard.getInfoAtBoardCoordinates(5, 7).hasBeenTargetted
    ).toBeTruthy();
  });

  test('receiveAttack() does not target the same coordinates twice', () => {
    const gameboard = new Gameboard();

    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(3, 9);

    expect(gameboard.receiveAttack(1, 1)).toBe(
      'Coordinates have been targetted already'
    );
    expect(gameboard.receiveAttack(3, 9)).toBe(
      'Coordinates have been targetted already'
    );
  });

  test('receiveAttack() calls hit(), which modifies the number of hits on the ship', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(1, 1, 1);
    gameboard.placeShip(0, 3, 3, 'ver');
    const shipOne = gameboard.getSpecificShip(1, 1);
    const shipTwo = gameboard.getSpecificShip(0, 4);
    expect(shipOne.getTimesHitProperty()).toBe(0);
    expect(shipTwo.getTimesHitProperty()).toBe(0);

    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(0, 3);
    gameboard.receiveAttack(0, 4);
    gameboard.receiveAttack(0, 5);

    expect(shipOne.isSunk()).toBeTruthy();
    expect(shipTwo.isSunk()).toBeTruthy();
  });

  test('receiveAttack() reports if the ship at the targetted coodinates has been sunk', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(9, 9, 1);
    gameboard.placeShip(0, 9, 3, 'hor');
    const shipOne = gameboard.getSpecificShip(9, 9);
    const shipTwo = gameboard.getSpecificShip(0, 9);
    expect(shipOne.isSunk()).toBeFalsy();
    expect(shipTwo.isSunk()).toBeFalsy();
    expect(gameboard.getSunkShipsProperty().length).toBeFalsy();

    gameboard.receiveAttack(9, 9);
    gameboard.receiveAttack(0, 9);
    gameboard.receiveAttack(1, 9);
    gameboard.receiveAttack(2, 9);

    expect(shipOne.isSunk()).toBeTruthy();
    expect(shipTwo.isSunk()).toBeTruthy();
    expect(gameboard.getSunkShipsProperty().length).toBe(2);
  });

  test('If receiveAttack() reports that the ship has been sunk, it disables its adjacent squares', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(9, 0, 2, 'ver');
    gameboard.placeShip(4, 4, 1);
    gameboard.placeShip(6, 6, 3);

    gameboard.receiveAttack(9, 0);
    gameboard.receiveAttack(9, 1);
    gameboard.receiveAttack(4, 4);

    expect(gameboard.receiveAttack(5, 4)).toBe(
      'Another sunk ship has made these coordinates unavailable'
    );
    expect(gameboard.receiveAttack(4, 3)).toBe(
      'Another sunk ship has made these coordinates unavailable'
    );
    expect(gameboard.receiveAttack(9, 2)).toBe(
      'Another sunk ship has made these coordinates unavailable'
    );
    expect(gameboard.receiveAttack(8, 0)).toBe(
      'Another sunk ship has made these coordinates unavailable'
    );
  });

  test('receiveAttack() does not allow attacks if game over', () => {
    const gameboard = new Gameboard();
    let x = 0;
    let y = 0;
    let counter = 10;
    while (counter) {
      gameboard.placeShip(x, y, 1);
      x += 2;
      counter--;

      if (counter === 5) {
        x = 0;
        y = 3;
      }
    }

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(2, 0);
    gameboard.receiveAttack(4, 0);
    gameboard.receiveAttack(6, 0);
    gameboard.receiveAttack(8, 0);
    gameboard.receiveAttack(0, 3);
    gameboard.receiveAttack(2, 3);
    gameboard.receiveAttack(4, 3);
    gameboard.receiveAttack(6, 3);

    gameboard.receiveAttack(5, 6);
    expect(
      gameboard.getInfoAtBoardCoordinates(5, 6).hasBeenTargetted
    ).toBeTruthy();
    gameboard.receiveAttack(8, 3);
    expect(gameboard.receiveAttack(8, 8)).toBe('Game over');
  });
});
