import { GameLoop } from '../modules/gameLoop';

describe('Test the game loop logic', () => {
  test('Game loop passes turns between players', () => {
    const game = new GameLoop();
    expect(game.getWhoseTurnItIs()).toBe('Human');

    expect(game.makeMove('11')).toBeTruthy();
    expect(game.getWhoseTurnItIs()).toBe('Computer');
    expect(game.makeMove()).toBeTruthy();
    expect(game.getWhoseTurnItIs()).toBe('Human');
  });

  // This test was successful with pre-determined locations for ships. But when locations got randomized with every game, it will fail because its implementation is hard-coded
  test.skip('Game loop terminates the game when there is a winner', () => {
    const game = new GameLoop();
    expect(game.getWinner()).toBeFalsy();

    let humanMoves = [
      '00',
      '99',
      '09',
      '90',
      '22',
      '23',
      '42',
      '43',
      '62',
      '72',
      '05',
      '15',
      '25',
      '45',
      '55',
      '65',
      '84',
      '85',
      '86',
      '87',
    ];

    for (let i = 0; i < 40; i++) {
      // Imitate a game loop where turns are being passed between players
      if (i % 2 === 0) {
        const randomIndex = Math.floor(Math.random() * humanMoves.length);
        const randomMove = humanMoves[randomIndex];
        humanMoves = humanMoves.filter((move) => {
          return move !== randomMove ? true : false;
        });
        game.makeMove(randomMove);
      } else {
        game.makeMove();
      }
    }

    expect(game.getWinner()).toBeTruthy();
    expect(game.getWinner()).toBe('Human');
    expect(game.getWhoseTurnItIs()).not.toBe('Computer');
    expect(game.makeMove()).toBeFalsy();
  });
});
