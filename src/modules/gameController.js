import { GameLoop } from './gameLoop';
// export { startGame };

const fieldForX = document.querySelector('#x-value');
const fieldForY = document.querySelector('#y-value');
const confirmButton = document.querySelector('.confirm-button');
const formBlock = document.querySelector('form');
const newGameButton = document.querySelector('.start-game-button');
newGameButton.addEventListener('click', () => {
  startGame();
});

let gameLoop = null;
function startGame() {
  console.log('Starting game...');

  gameLoop = new GameLoop();
  console.log('Players and boards are being created...');

  confirmButton.addEventListener('click', play);
}

function play() {
  let currentPlayer;

  // Player makes a move
  currentPlayer = gameLoop.getWhoseTurnItIs();
  console.log(`It is ${currentPlayer}'s move`);
  const x = fieldForX.value;
  const y = fieldForY.value;
  formBlock.reset();
  if (!gameLoop.makeMove(`${x}${y}`)) {
    play();
  }
  console.log('Turn has been passed by PlayerOne');

  // Computer makes an immediate move
  currentPlayer = gameLoop.getWhoseTurnItIs();
  console.log(`It is ${currentPlayer}'s move`);
  gameLoop.makeMove();
  console.log('Turn has been passed by PlayerTwo');
}

// Console log if the attack hit a ship or is a missed shot
// console.log('Game over...');
// console.log('Winner is Human/Computer...');
