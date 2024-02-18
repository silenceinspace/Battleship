import { startGame } from '../modules/gameController';

describe('Test the game loop logic', () => {
  test('Game loop passes turns between players', () => {
    const game = startGame();
    expect(game.getWhoseTurnItIs()).toBe('Human');

    game.makeMove();
    expect(game.getWhoseTurnItIs()).toBe('Computer');
    game.makeMove();
    expect(game.getWhoseTurnItIs()).toBe('Human');
  });

  test.only('Game loop terminates the game when there is a winner', () => {
    const game = startGame();
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
    expect(game.makeMove()).toBe('Game over');
  });
});
