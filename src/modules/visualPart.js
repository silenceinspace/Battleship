import { GameLoop } from './gameLoop';
export { generateGrid };

// Select DOM elements
const startGameButton = document.querySelector('.start-game-button');
const grids = document.querySelectorAll('.board-grid');
const numberGridIndexes = document.querySelectorAll('.number-board-indexes');
const letterGridIndexes = document.querySelectorAll('.letter-board-indexes');
const gridSquaresHuman = document.querySelector('.board-grid.human');
const gridSquaresComputer = document.querySelector('.board-grid.computer');

function createAndAppendElement(elementType, appendTo, ...classArg) {
  const element = document.createElement(elementType);
  appendTo.appendChild(element);

  if (classArg.length) {
    classArg.forEach((classValue) => {
      element.classList.add(classValue);
    });
  }

  return element;
}

// This method is called in index.js
function generateGrid() {
  grids.forEach((div) => {
    for (let i = 0; i < 100; i++) {
      const element = createAndAppendElement('div', div, 'square', 'disabled');

      // Add ids for squares to tie array boards with grid. Reverse them because first coordinate is X, so it changes more frequently
      if (i < 10) {
        element.classList.add(i + '0');
      } else {
        const reversedId = String(i).split('').reverse().join('');
        element.classList.add(reversedId);
      }
    }
  });

  numberGridIndexes.forEach((position) => {
    for (let i = 1; i < 11; i++) {
      const element = createAndAppendElement('div', position, 'board-position');
      element.textContent = i;
    }
  });

  letterGridIndexes.forEach((position) => {
    const characters = 'ABCDEFGHIJ';
    for (let i = 0; i < 10; i++) {
      const element = createAndAppendElement('div', position, 'board-position');
      element.textContent = characters[i];
    }
  });
}

// Varible holding gameLoop object, updating its inner state with "Start game"
let game = false;

// Make sure that clicks are not registered by the player on its own board while playing against the computer (before starting a game, it is important to select a game mode — 2 players or player vs AI)
grids.forEach((div) => {
  div.addEventListener('click', registerClicksOnBoards);
});
function registerClicksOnBoards(event) {
  if (!game) {
    console.log('Board is not active. Start game to active');
    return;
  } else if (game.getWinner()) {
    console.log('Game over! Start new game');
    return;
  }

  // Apply event delegations to board grids
  const isInsideSquare = event.target.closest('div.square');
  if (!isInsideSquare) return;

  const getSquareId = [...isInsideSquare.classList].filter((classValue) => {
    return classValue.length === 2 ? true : false;
  });

  // Before the attack look at the sunkShips property and compare it with the state of the board after the attack
  const sunkShipsOfPlayerTwo = game.getPlayerTwoSunkShips().length;

  const playerAttack = game.makeMove(getSquareId[0]);
  if (!playerAttack) {
    console.log('Attack cannot be registered. Repeat again');
    return;
  } else {
    // Confirm if attack hit a ship or is a missed shot
    if (isInsideSquare.classList.contains('contains-ship')) {
      isInsideSquare.classList.add('successful-shot');
      console.log('Hit a ship!');

      if (sunkShipsOfPlayerTwo !== game.getPlayerTwoSunkShips().length) {
        console.log('Sink the ship!');
        disableAdjacentSquaresToSunkShips(game);
        if (game.getWinner()) {
          console.log(`Game over! ${game.getWinner()} has won`);
          return;
        }
      }
    } else {
      isInsideSquare.classList.add('missed-shot');
      console.log('Missed shot!!');
    }

    hightlightComputerMoves();
  }
}

function hightlightComputerMoves() {
  const sunkShipsOfPlayerOne = game.getPlayerOneSunkShips().length;

  let squareId;
  let isPreviouslyHitShip = game.getCoordinatesOfPreviouslyHitShip();
  if (isPreviouslyHitShip) {
    const partOfShipUnderAttack = game
      .getCoordinatesOfPreviouslyHitShip()[0]
      .join('');
    squareId = game.makeMove(partOfShipUnderAttack);
  } else {
    squareId = game.makeMove();
  }

  const squares = [...gridSquaresHuman.children];
  let targettedSquare;
  squares.forEach((square) => {
    if (square.classList.contains(squareId)) {
      targettedSquare = square;
    }
  });

  if (targettedSquare.classList.contains('contains-ship')) {
    console.log('Hit a ship!');
    targettedSquare.classList.add('successful-shot');

    if (sunkShipsOfPlayerOne !== game.getPlayerOneSunkShips().length) {
      console.log('Sink the ship!');
      game.updateCoordinatesOfPreviouslyHitShip(squareId);
      disableAdjacentSquaresToSunkShips(game);
      if (game.getWinner()) {
        console.log(`Game over! ${game.getWinner()} has won`);
        return;
      }
    } else if (game.getCoordinatesOfPreviouslyHitShip()) {
      console.log('Hit the saved ship');
      game.updateCoordinatesOfPreviouslyHitShip(squareId);
    } else {
      console.log('Remember ship for next move');
      const humanShips = game.getPlayerOneAllShips();
      humanShips.forEach((ship) => {
        const coordinatedShip = ship.coordinates;

        // allShips array on game boards contains 1-square ships' pair of coordinates in an outer array when the pair is numbers. With multi-square ships, coordinates are still saved in an outer array. Though their pairs of coordinates are stored in inner arrays. Last but not least, it is not important for us to loop over 1-square ships because they will never be memorized as coordinatesForComputerToTarget
        if (Array.isArray(coordinatedShip[0])) {
          coordinatedShip.forEach((coordinates) => {
            if (coordinates.join('') === squareId) {
              const stillActiveShipSquares = ship.coordinates.filter(
                (square) => {
                  return squareId !== square.join('');
                }
              );
              game.saveCoordinatesOfPreviouslyHitShip(stillActiveShipSquares);
            }
          });
        }
      });
    }
  } else {
    targettedSquare.classList.add('missed-shot');
    console.log('Missed shot!');
  }
}

startGameButton.addEventListener('click', startGame);
function startGame() {
  const statusOfButton = startGameButton.classList;

  if (statusOfButton.contains('not-started')) {
    startGameButton.classList.replace('not-started', 'started');
    console.log('Starting game...');
    game = new GameLoop();
    addHoverEffectToGridSquares(grids);
    displayShipsOnBoards();
  } else if (statusOfButton.contains('started')) {
    const confirmMessage = confirm('Do you really want to start a new game?');
    if (confirmMessage) {
      console.log('Starting new game...');
      game = new GameLoop();
      clearPreviousBoardsVisuals(grids);
    } else {
      console.log('Keeping the relevant game!');
    }
  }
}

function clearPreviousBoardsVisuals(boards) {
  boards.forEach((div) => {
    const divsOfBoard = [...div.children];

    divsOfBoard.forEach((square) => {
      const classValues = square.classList;

      if (classValues.contains('missed-shot')) {
        square.classList.remove('missed-shot');
      }

      if (classValues.contains('successful-shot')) {
        square.classList.remove('successful-shot');
      }

      if (classValues.contains('adjacent-to-sunk-ship')) {
        square.classList.remove('adjacent-to-sunk-ship');
      }
    });
  });
}

function addHoverEffectToGridSquares(divs) {
  divs.forEach((div) => {
    const divsOfOneBoard = [...div.children];
    divsOfOneBoard.forEach((square) => {
      square.classList.replace('disabled', 'active');
    });
  });
}

function loopOverAllDivsAndArraySquares(currentGame, property) {
  const humanGridDivs = [...gridSquaresHuman.children];
  const computerGridDivs = [...gridSquaresComputer.children];
  const humanBoard = currentGame.getHumanBoard();
  const boardComputer = currentGame.getComputerBoard();

  let counterForArrayWithDivs = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const computerSquare = boardComputer[j][i][0];
      const humanSquare = humanBoard[j][i][0];

      if (computerSquare[property]) {
        if (property === 'containsShip') {
          computerGridDivs[counterForArrayWithDivs].classList.add(
            'contains-ship'
          );
        } else if (property === 'isAdjacentToSomeSunkShip') {
          computerGridDivs[counterForArrayWithDivs].classList.add(
            'adjacent-to-sunk-ship'
          );
        }
      }

      if (humanSquare[property]) {
        if (property === 'containsShip') {
          humanGridDivs[counterForArrayWithDivs].classList.add('contains-ship');
        } else if (property === 'isAdjacentToSomeSunkShip') {
          humanGridDivs[counterForArrayWithDivs].classList.add(
            'adjacent-to-sunk-ship'
          );
        }
      }

      counterForArrayWithDivs++;
    }
  }
}

function displayShipsOnBoards() {
  loopOverAllDivsAndArraySquares(game, 'containsShip');
}

function disableAdjacentSquaresToSunkShips() {
  loopOverAllDivsAndArraySquares(game, 'isAdjacentToSomeSunkShip');
}
