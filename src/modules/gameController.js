import { GameLoop } from './gameLoop';
export { startGame };

const startGame = () => {
  console.log('Start a new game...');

  const gameLoop = new GameLoop();
  console.log('Two new players and their boards are created...');

  return gameLoop;
};

// console.log('It is the first player turn...');
// Make an attack through a prompt window or calling a function in the console
// Console log if the attack hit a ship or is a missed shot
// console.log('The turn has been passed...');
// console.log('It is the second player turn...');
// console.log('Game over...');
// console.log('Winner is Human/Computer...');
// After that it is not possible to attack or do anything except for startning a new game
