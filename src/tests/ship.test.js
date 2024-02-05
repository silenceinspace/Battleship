import { Ship } from '../modules/ship';

describe('Test public interface of a ship', () => {
  let ship;
  beforeAll(() => {
    ship = new Ship(4);
  });

  test('Ship has been hit', () => {
    expect(ship.timesHit).toBe(0);
    expect(ship.hit()).toBeTruthy();
    expect(ship.timesHit).toBe(1);
  });

  test('Ship has been sunk', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});
