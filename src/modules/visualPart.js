import { GameLoop } from './gameLoop';
export { initializeGrids };

// Select control buttons
const startGameButton = document.querySelector('.start-game-button');
const randomizeButton = document.querySelector('.randomize-ships-locations');
const newGameButton = document.querySelector('.new-game-button');

// Select grids
const grids = document.querySelectorAll('.board-grid');
const numberGridIndexes = document.querySelectorAll('.number-board-indexes');
const letterGridIndexes = document.querySelectorAll('.letter-board-indexes');
const gridSquaresHuman = document.querySelector('.board-grid.human');
const gridSquaresComputer = document.querySelector('.board-grid.computer');

// Event listeners
startGameButton.addEventListener('click', startGame);
newGameButton.addEventListener('click', restartGame);
randomizeButton.addEventListener('click', randomizeShipLocations);
gridSquaresComputer.addEventListener('click', registerClicksOnBoards);

// Varible holding gameLoop object
let game = new GameLoop();

// Functions
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

// This is the only method that is called in index.js (from which webpack takes input)
function initializeGrids() {
  grids.forEach((div) => {
    for (let i = 0; i < 100; i++) {
      const element = createAndAppendElement('div', div, 'square');

      // Add ids for squares to connect boards arrays (LOGIC) with grids (UI). Reverse them because first coordinate is X, so it changes more frequently and make them strings to keep 0's in 01, 02
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

  displayShipsOnBoards();
}

function loopOverAllDivsAndArraySquares(currentGame, property) {
  // Use the spread operator to turn HTML collection into an iterable element i.e. array
  const humanGridDivs = [...gridSquaresHuman.children];
  const computerGridDivs = [...gridSquaresComputer.children];
  const humanBoard = currentGame.getBoardOf('Human');
  const boardComputer = currentGame.getBoardOf('Computer');

  let counterForArrayWithDivs = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const computerSquare = boardComputer[j][i][0];
      const humanSquare = humanBoard[j][i][0];

      // Display the state of boards based on their squares' inner properties 
      if (computerSquare[property]) {
        if (property === 'containsShip') {
          computerGridDivs[counterForArrayWithDivs].classList.add(
            'contains-ship-hidden'
          );
        }

        if (property === 'isAdjacentToSomeSunkShip') {
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

function startGame() {
  const confirmStartGame = confirm(
    'After starting you will not be able to randomize ships locations anymore!'
  );

  if (confirmStartGame) {
    startGameButton.classList.replace('not-started', 'started');
    alert('Game has been started!');
    toggleHoverEffectOnBoard(gridSquaresComputer);
  } else {
    alert('You can still randomize your ships locations!');
  }
}

function restartGame() {
  const buttonStatus = startGameButton.classList;
  if (buttonStatus.contains('not-started')) {
    alert('No active game has been found. You need to start one!');
    return;
  }

  if (!game.getWinner()) {
    const confirmNewGame = confirm('Are you sure you want to start new game?');
    if (!confirmNewGame) {
      alert('Your active game is saved. Play on!');
      return;
    }
  }

  alert('New game!');
  buttonStatus.replace('started', 'not-started');
  game = new GameLoop();
  clearPreviousBoardsVisuals();
}

function randomizeShipLocations() {
  const buttonStatus = startGameButton.classList;
  if (buttonStatus.contains('started')) {
    alert('Cannot randomize ships locations during the game!');
  } else {
    game.changeShipsLocations();
    clearPreviousBoardsVisuals();
  }
}

function registerClicksOnBoards(event) {
  if (game.getWinner()) {
    alert('Game over! Start new game!');
    return;
  } else {
    const buttonStatus = startGameButton.classList;
    if (buttonStatus.contains('not-started')) {
      alert('Game has not been started yet!');
      return;
    }
  }

  // Apply event delegations to board grids
  const isInsideSquare = event.target.closest('div.square');
  if (!isInsideSquare) return;

  // Before the attack look at the sunkShips property and compare it with the state of the board after the attack to understand if any ship has been sunk during the move
  const sunkShipsOfPlayerTwo = game.getSunkShipsOf('Computer');

  const getSquareId = [...isInsideSquare.classList].filter((classValue) => {
    return classValue.length === 2 ? true : false;
  });
  game.makeMove(getSquareId[0]);

  if (isInsideSquare.classList.contains('contains-ship-hidden')) {
    isInsideSquare.classList.add('successful-shot');

    if (sunkShipsOfPlayerTwo !== game.getSunkShipsOf('Computer')) {
      disableAdjacentSquaresToSunkShips(game);
      if (game.getWinner()) {
        alert(`Game over! ${game.getWinner()} has won!`);
        toggleHoverEffectOnBoard(gridSquaresComputer);
        return;
      }
    }
  } else {
    isInsideSquare.classList.add('missed-shot');
  }

  computerMakesImmediateMove();
}

function computerMakesImmediateMove() {
  const sunkShipsOfPlayerOne = game.getSunkShipsOf('Human');

  let squareId;
  let isPreviouslyHitShip = game.getCoordinatesOfPreviouslyHitShip();
  // When computer hits a ship but does not sink it fully, it will store the whole ship object and sink it in the upcoming moves
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
    targettedSquare.classList.add('successful-shot');

    if (sunkShipsOfPlayerOne !== game.getSunkShipsOf('Human')) {
      game.updateCoordinatesOfPreviouslyHitShip(squareId);
      disableAdjacentSquaresToSunkShips(game);

      if (game.getWinner()) {
        alert(`Game over! ${game.getWinner()} has won`);
        revealSurvivedShips();
        toggleHoverEffectOnBoard(gridSquaresComputer);
        return;
      }
    } else if (game.getCoordinatesOfPreviouslyHitShip()) {
      game.updateCoordinatesOfPreviouslyHitShip(squareId);
    } else {
      const humanShips = game.getHumanAllShips();
      humanShips.forEach((ship) => {
        const coordinatedShip = ship.coordinates;

        // allShips array on game boards contains 1-square ships' pair of coordinates in an outer array where the pair is numbers. With multi-square ships, coordinates are still saved in an outer array. Though their pairs of coordinates are stored in inner arrays. Last but not least, it is not important for us to loop over 1-square ships because they will never be memorized as coordinatesForComputerToTarget
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
  }
}

function clearPreviousBoardsVisuals() {
  const boardElements = [...grids, ...letterGridIndexes, ...numberGridIndexes];
  boardElements.forEach((element) => {
    element.replaceChildren();
  });
  initializeGrids();
}

function toggleHoverEffectOnBoard(divs) {
  const arrayOfGridDivs = [...divs.children];
  arrayOfGridDivs.forEach((div) => {
    div.classList.toggle('active');
  });
}

function revealSurvivedShips() {
  const array = [...gridSquaresComputer.children];
  array.forEach((square) => {
    if (
      square.classList.contains('contains-ship-hidden') &&
      !square.classList.contains('successful-shot')
    ) {
      square.classList.add('highlight-survived-ship');
    }
  });
}
