import { Ship } from '../modules/ship';

describe.skip('Test public interface of a Ship class', () => {
  test('hit() increments the number of hits the ship has received', () => {
    const ship = new Ship(2);
    expect(ship.getTimesHitProperty()).toBe(0);

    ship.hit();
    ship.hit();

    expect(ship.getTimesHitProperty()).toBe(2);
  });

  test('isSunk() returns if the ship has been sunk or not', () => {
    const ship = new Ship(3);

    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
    ship.hit();

    expect(ship.isSunk()).toBeTruthy();
  });

  test('hit() cannot be called on sunk ships', () => {
    const ship = new Ship(1);

    ship.hit();
    expect(ship.hit()).toBeFalsy();
  });

  test('hit() works with ships of all lengths even though the game features only 4 types of ships', () => {
    const ship = new Ship(10);

    for (let i = 0; i < 10; i++) {
      ship.hit();
    }

    expect(ship.getTimesHitProperty()).toBe(10);
    expect(ship.isSunk()).toBeTruthy();
  });
});
