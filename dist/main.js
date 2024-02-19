/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/gameLoop.js":
/*!*********************************!*\
  !*** ./src/modules/gameLoop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameLoop: () => (/* binding */ GameLoop)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");




class GameLoop {
  constructor() {
    this.humanBoard = this.#populateBoardWithShips();
    this.computerBoard = this.#populateBoardWithShips();
    this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Human', this.humanBoard, this.computerBoard);
    this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.Computer(
      'Computer',
      this.computerBoard,
      this.humanBoard
    );
    this.attacksNow = this.playerOne;
    this.thereIsAWinner = null;
  }

  // Place 10 ships at pretedermined coodinates for now
  #populateBoardWithShips() {
    const board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();

    board.placeShip(0, 0, 1);
    board.placeShip(9, 9, 1);
    board.placeShip(0, 9, 1);
    board.placeShip(9, 0, 1);
    board.placeShip(2, 2, 2, 'ver');
    board.placeShip(4, 2, 2, 'ver');
    board.placeShip(6, 2, 2, 'hor');
    board.placeShip(0, 5, 3, 'hor');
    board.placeShip(4, 5, 3, 'hor');
    board.placeShip(8, 4, 4, 'ver');

    return board;
  }

  #passTurns() {
    this.attacksNow.name === 'Human'
      ? (this.attacksNow = this.playerTwo)
      : (this.attacksNow = this.playerOne);
  }

  #findBoardWithGameOver() {
    if (this.humanBoard.gameOver) {
      this.thereIsAWinner = this.playerTwo.name;
      return true;
    } else if (this.computerBoard.gameOver) {
      this.thereIsAWinner = this.playerOne.name;
      return true;
    } else {
      return false;
    }
  }

  makeMove(...coordinates) {
    if (this.thereIsAWinner) {
      return 'Game over';
    }

    if (this.attacksNow.name === 'Human') {
      const move = coordinates[0];
      const x = Number(move[0]);
      const y = Number(move[1]);
      console.log(`Attacking at [${x}, ${y}]`);
      if (this.playerOne.attackOpponent(x, y) !== 'Success') {
        console.log('Move failed. Try again.');
        return false;
      }
    } else if (this.attacksNow.name === 'Computer') {
      this.playerTwo.attackOpponent();
    }

    // Immediately terminate the game here if there is a board with "gameOver" set to true
    if (this.#findBoardWithGameOver()) {
      return;
    }

    this.#passTurns();
    return true;
  }

  getWhoseTurnItIs() {
    return this.attacksNow.name;
  }

  getWinner() {
    return this.thereIsAWinner;
  }

  // getOwnBoard(player) {
  //   if (player === 'Human') {
  //     return this.humanBoard;
  //   } else if (player === 'Computer') {
  //     return this.computerBoard;
  //   }
  // }

  // getEnemyBoard(player) {
  //   if (player === 'Human') {
  //     return this.computerBoard;
  //   } else if (player === 'Computer') {
  //     return this.humanBoard;
  //   }
  // }
}


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");



class Gameboard {
  constructor() {
    this.board = this.#createGameboard();
    this.allShips = [];
    this.sunkShips = [];
    this.gameOver = false;
  }

  #createGameboard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        // In each square of the board, there is an object with a few properties to control the game's logic
        board[i].push([
          {
            containsShip: false,
            isAdjacentToSomeShip: false,
            isAdjacentToSomeSunkShip: false,
            hasBeenTargetted: false,
          },
        ]);
      }
    }
    return board;
  }

  // Helpers for placeShip()
  #fitInBoardLimits(...coordinates) {
    const arrayWithCoordinates = coordinates;
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    // Arguments of this method come in two different flavors — they can be either individual X and Y values (case with a 1-square ship), or arrays with combinations of X and Y values (case with multiple-square ships)
    // It is necessary to check only if they are greater than 9 in the context of arrays, because ships are expanded to the right/down by default — a two-square ship placed horizontally at [0,0] populates to [0,0], [1,0] and never to [0,0], [-1, 0]
    if (Array.isArray(x) && Array.isArray(y)) {
      const valuesXAndY = [...x, ...y];
      const xOrYIsOutsideBoard = valuesXAndY.filter((value) => value > 9);
      if (xOrYIsOutsideBoard.length) {
        return false;
      } else {
        return true;
      }
    }

    if (x > 9 || y > 9 || x < 0 || y < 0) {
      return false;
    } else {
      return true;
    }
  }

  #reserveAdjacentSquares(...coordinates) {
    const arrayWithCoordinates = coordinates;
    const coordinateX = arrayWithCoordinates[0];
    const coordinateY = arrayWithCoordinates[1];
    const property = arrayWithCoordinates[2];

    // Use two arrays filled with all possible options for adjacent squares
    // A square can have 8 adjacent squares at most
    const adjacentCoordinatesOfX = [-1, 0, 1, 1, 1, 0, -1, -1];
    const adjacentCoordinatesOfY = [-1, -1, -1, 0, 1, 1, 1, 0];

    for (let i = 0; i < 8; i++) {
      const x = coordinateX + adjacentCoordinatesOfX[i];
      const y = coordinateY + adjacentCoordinatesOfY[i];

      if (x > 9 || y > 9 || x < 0 || y < 0) {
        continue;
      } else if (this.getInfoAtBoardCoordinates(x, y).containsShip) {
        // Squares that are a part of the ship must not be reserved because they are not adjacent in any case
        continue;
      }

      if (property === 'isAdjacentToSomeShip') {
        this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeShip = true;
      } else if (property === 'isAdjacentToSomeSunkShip') {
        this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeSunkShip = true;
      }
    }
  }

  #confirmCoordinatesAreNotAvailable(...coordinates) {
    const resultOfHelper = this.#accessPropertyOnShipObject(
      coordinates,
      'containsShip'
    );
    return resultOfHelper;
  }

  #standInAnotherShipAdjacentSquares(...coordinates) {
    const resultOfHelper = this.#accessPropertyOnShipObject(
      coordinates,
      'isAdjacentToSomeShip'
    );
    return resultOfHelper;
  }

  // Use the rest operator to place all arguments into one array and then extract specific parts of it
  #accessPropertyOnShipObject(...coordinatesAndProperty) {
    const arrayWithArguments = coordinatesAndProperty;
    const x = arrayWithArguments[0][0];
    const y = arrayWithArguments[0][1];
    const property = arrayWithArguments[1];

    let willCancelShipCreation;
    if (Array.isArray(x) && Array.isArray(y)) {
      for (let i = 0; i < x.length; i++) {
        // Access a property on the ship with which the method was called in a less hard-coded manner with a dot notation
        willCancelShipCreation = this.getInfoAtBoardCoordinates(x[i], y[i])[
          property
        ];

        if (willCancelShipCreation) {
          return true;
        }
      }
      return false;
    } else {
      willCancelShipCreation = this.getInfoAtBoardCoordinates(x, y)[property];

      if (willCancelShipCreation) {
        return true;
      } else {
        return false;
      }
    }
  }

  #checkIfMaxNumberOfShipsIsReached() {
    if (this.allShips.length >= 10) {
      return true;
    } else {
      return false;
    }
  }

  #limitPossibleLengthOfShips(ship) {
    if (ship.length < 1 || ship.length > 4) {
      return true;
    } else {
      return false;
    }
  }

  placeShip(x, y, shipSize, direction = 'hor') {
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(shipSize);

    if (this.#checkIfMaxNumberOfShipsIsReached()) {
      return 'There are 10 ships on the board. The limit is reached';
    } else if (this.#limitPossibleLengthOfShips(ship)) {
      return 'Cannot place a ship of this length. Min length is 1. Max length is 4';
    }

    if (ship.length > 1) {
      // Create two arrays to place ships over multiple squares, doing it in both directions
      const allValuesOfX = [];
      const allValuesOfY = [];

      // If placed horizontally, the ship's first square will generate the rest of squares to the right, without changing the row
      if (direction === 'hor') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          x += 1;
        }
        // If placed vertically, the ship's first square will generate the rest of squares down, without changing the column
      } else if (direction === 'ver') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          y += 1;
        }
      }

      // Check if any of these restrictions is violated before placing a ship. If yes, the ship is not placed on the board
      if (!this.#fitInBoardLimits(allValuesOfX, allValuesOfY)) {
        return 'Cannot place the ship outside the board';
      } else if (
        this.#confirmCoordinatesAreNotAvailable(allValuesOfX, allValuesOfY)
      ) {
        return 'Cannot place the ship in squares taken by another ship';
      } else if (
        this.#standInAnotherShipAdjacentSquares(allValuesOfX, allValuesOfY)
      ) {
        return 'Cannot place the ship right beside another ship';
      }

      // Make sure there is one square of a gap between two ships (in all directions)
      for (let i = 0; i < ship.length; i++) {
        this.getInfoAtBoardCoordinates(
          allValuesOfX[i],
          allValuesOfY[i]
        ).containsShip = ship;

        // Store ships inside the allShips array with their coordinates to be able to easier answer if the attacked coordinates belong to any ship
        if (i === 0) {
          this.allShips.push({
            shipInstance: ship,
            coordinates: [[allValuesOfX[i], allValuesOfY[i]]],
          });
        } else {
          this.allShips
            .at(-1)
            .coordinates.push([allValuesOfX[i], allValuesOfY[i]]);
        }
      }

      // Keep reserveAdjacentSquares() in a separate loop because it is important all ships to be priorly created to reserve only truly adjacent squares. The other 2 squares of a ship with the length of 3 are not adjacent; They are a part of the ship
      for (let i = 0; i < ship.length; i++) {
        this.#reserveAdjacentSquares(
          allValuesOfX[i],
          allValuesOfY[i],
          'isAdjacentToSomeShip'
        );
      }
    } else if (ship.length === 1) {
      if (this.#standInAnotherShipAdjacentSquares(x, y)) {
        return 'Cannot place the ship right beside another ship';
      } else if (!this.#fitInBoardLimits(x, y)) {
        return 'Cannot place the ship outside the board';
      } else if (this.#confirmCoordinatesAreNotAvailable(x, y)) {
        return 'Cannot place the ship in squares taken by another ship';
      }

      this.getInfoAtBoardCoordinates(x, y).containsShip = ship;
      this.#reserveAdjacentSquares(x, y, 'isAdjacentToSomeShip');
      this.allShips.push({ shipInstance: ship, coordinates: [x, y] });
    }
  }

  // Helpers for receiveAttack()
  #targetCoordinatesOutsideBoard(arrayWithCoordinates) {
    const attackIsOutsideBoard = arrayWithCoordinates.filter((coordinate) => {
      return coordinate > 9 || coordinate < 0;
    });

    if (attackIsOutsideBoard.length) {
      return true;
    } else {
      return false;
    }
  }

  #confirmSquareHasBeenTargettedAlready(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).hasBeenTargetted) {
      return true;
    } else {
      return false;
    }
  }

  #confirmSquareIsDisabledByAnotherShip(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeSunkShip) {
      return true;
    } else {
      return false;
    }
  }

  #findTargettedShip(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).containsShip) {
      console.log('Hit an enemy ship!!!');
      return true;
    } else {
      console.log('Missed shot!!!');
      return false;
    }
  }

  #checkIfAllShipsHaveBeenDestroyed() {
    if (
      this.allShips.length === this.sunkShips.length &&
      this.allShips.length &&
      this.sunkShips.length
    ) {
      this.gameOver = true;
    }
  }

  #checkGameState() {
    if (this.gameOver) {
      return true;
    } else {
      return false;
    }
  }

  receiveAttack(...pairOfCoordinates) {
    const arrayWithCoordinates = pairOfCoordinates;
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.#checkGameState()) {
      return 'Game over';
    } else if (this.#targetCoordinatesOutsideBoard(arrayWithCoordinates)) {
      return 'Cannot target non-existent coordinates';
    } else if (
      this.#confirmSquareHasBeenTargettedAlready(arrayWithCoordinates)
    ) {
      return 'Coordinates have been targetted already';
    } else if (
      this.#confirmSquareIsDisabledByAnotherShip(arrayWithCoordinates)
    ) {
      return 'Another sunk ship has made these coordinates unavailable';
    }

    // Target the provided square successfully only if none of the above conditions terminates this method
    this.getInfoAtBoardCoordinates(x, y).hasBeenTargetted = true;

    // hasBeenTargetted property can either mean a successful attack (hit a ship) or a failed one (a missed shot)
    if (this.#findTargettedShip(arrayWithCoordinates)) {
      const targettedShip = this.getSpecificShip(x, y);
      targettedShip.hit();

      if (targettedShip.isSunk()) {
        this.sunkShips.push(targettedShip);
        const shipSquares = this.getSpecificShip(x, y, 'coordinates');

        // Squares around a sunk ship are not possible for attacks because they cannot contain another ship based on the rules of ships' placing — there must be a one-square gap between two different ships
        if (targettedShip.length === 1) {
          this.#reserveAdjacentSquares(
            shipSquares[0],
            shipSquares[1],
            'isAdjacentToSomeSunkShip'
          );
        } else {
          for (let i = 0; i < shipSquares.length; i++) {
            this.#reserveAdjacentSquares(
              shipSquares[i][0],
              shipSquares[i][1],
              'isAdjacentToSomeSunkShip'
            );
          }
        }

        // Gameboard should keep track of its termination state because GameLoop will rely on it later
        this.#checkIfAllShipsHaveBeenDestroyed();
      }
    }
    return 'Success';
  }

  getInfoAtBoardCoordinates(x, y) {
    return this.board.at(x).at(y).at(0);
  }

  getAllShips() {
    return this.allShips;
  }

  getSunkShipsProperty() {
    return this.sunkShips;
  }

  getSpecificShip(x, y, property = 'shipInstance') {
    // Array allShips is an array featuring objects with the 'shipInstance' and 'coordinates' properties
    // If inside 'shipInstance' there is a ship with the length of 1, then its coordinates are stored inside a single array — [...]
    // However, if it's a longer ship, then a few different coordinates are associated with the ship and attacking any of them should hit that ship. In that case, store individual coordinates inside another array — [[...], [...]]
    const ship = this.getAllShips().filter((item) => {
      if (!Array.isArray(item.coordinates[0])) {
        return item.coordinates[0] === x && item.coordinates[1] === y
          ? true
          : false;
      } else {
        for (let i = 0; i < item.coordinates.length; i++) {
          if (item.coordinates[i][0] === x && item.coordinates[i][1] === y) {
            return true;
          }
        }
        return false;
      }
    });

    return ship[0][property];
  }
}


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });


class Player {
  constructor(name, boardOne, boardTwo) {
    this.name = name;
    this.ownBoard = boardOne;
    this.enemyBoard = boardTwo;
  }

  attackOpponent(x, y) {
    return this.enemyBoard.receiveAttack(x, y);
  }
}

class Computer extends Player {
  constructor(name, boardOne, boardTwo) {
    super(name, boardOne, boardTwo);
    this.possibleMoves = this.#createAllPossibleMoves();
  }

  // Create all possible moves. After each move, that move is going to be removed from possibleMoves so that moves are never repeated
  #createAllPossibleMoves() {
    const moves = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        moves.push(`${i}${j}`);
      }
    }

    return moves;
  }

  attackOpponent() {
    if (!this.possibleMoves.length) {
      return 'There are no possible moves left';
    }

    const randomIndex = Math.floor(Math.random() * this.possibleMoves.length);
    const x = Number(this.possibleMoves[randomIndex][0]);
    const y = Number(this.possibleMoves[randomIndex][1]);

    console.log(`Attacking at [${x}, ${y}]`);
    this.enemyBoard.receiveAttack(x, y);
    this.possibleMoves = this.possibleMoves.filter((move) => {
      return move !== `${x}${y}`;
    });

    return [x, y]; // Return an array of coordinates to pass a test that ensures Computer does hit the Player's board at the coordinates
  }

  getLengthOfPossibleMovesArray() {
    return this.possibleMoves.length;
  }
}


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });

class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    if (this.isSunk()) {
      return 'Cannot hit the ship. It is sunk already';
    } else {
      this.timesHit += 1;
    }
  }

  isSunk() {
    if (this.length === this.timesHit) {
      return true;
    } else {
      return false;
    }
  }

  getTimesHitProperty() {
    return this.timesHit;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/modules/gameLoop.js");

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

  gameLoop = new _gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixFQUFFLEVBQUUsRUFBRTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gJy4vcGxheWVyJztcbmV4cG9ydCB7IEdhbWVMb29wIH07XG5cbmNsYXNzIEdhbWVMb29wIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5odW1hbkJvYXJkID0gdGhpcy4jcG9wdWxhdGVCb2FyZFdpdGhTaGlwcygpO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IHRoaXMuI3BvcHVsYXRlQm9hcmRXaXRoU2hpcHMoKTtcbiAgICB0aGlzLnBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ0h1bWFuJywgdGhpcy5odW1hbkJvYXJkLCB0aGlzLmNvbXB1dGVyQm9hcmQpO1xuICAgIHRoaXMucGxheWVyVHdvID0gbmV3IENvbXB1dGVyKFxuICAgICAgJ0NvbXB1dGVyJyxcbiAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZCxcbiAgICAgIHRoaXMuaHVtYW5Cb2FyZFxuICAgICk7XG4gICAgdGhpcy5hdHRhY2tzTm93ID0gdGhpcy5wbGF5ZXJPbmU7XG4gICAgdGhpcy50aGVyZUlzQVdpbm5lciA9IG51bGw7XG4gIH1cblxuICAvLyBQbGFjZSAxMCBzaGlwcyBhdCBwcmV0ZWRlcm1pbmVkIGNvb2RpbmF0ZXMgZm9yIG5vd1xuICAjcG9wdWxhdGVCb2FyZFdpdGhTaGlwcygpIHtcbiAgICBjb25zdCBib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgIGJvYXJkLnBsYWNlU2hpcCgwLCAwLCAxKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoOSwgOSwgMSk7XG4gICAgYm9hcmQucGxhY2VTaGlwKDAsIDksIDEpO1xuICAgIGJvYXJkLnBsYWNlU2hpcCg5LCAwLCAxKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoMiwgMiwgMiwgJ3ZlcicpO1xuICAgIGJvYXJkLnBsYWNlU2hpcCg0LCAyLCAyLCAndmVyJyk7XG4gICAgYm9hcmQucGxhY2VTaGlwKDYsIDIsIDIsICdob3InKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoMCwgNSwgMywgJ2hvcicpO1xuICAgIGJvYXJkLnBsYWNlU2hpcCg0LCA1LCAzLCAnaG9yJyk7XG4gICAgYm9hcmQucGxhY2VTaGlwKDgsIDQsIDQsICd2ZXInKTtcblxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gICNwYXNzVHVybnMoKSB7XG4gICAgdGhpcy5hdHRhY2tzTm93Lm5hbWUgPT09ICdIdW1hbidcbiAgICAgID8gKHRoaXMuYXR0YWNrc05vdyA9IHRoaXMucGxheWVyVHdvKVxuICAgICAgOiAodGhpcy5hdHRhY2tzTm93ID0gdGhpcy5wbGF5ZXJPbmUpO1xuICB9XG5cbiAgI2ZpbmRCb2FyZFdpdGhHYW1lT3ZlcigpIHtcbiAgICBpZiAodGhpcy5odW1hbkJvYXJkLmdhbWVPdmVyKSB7XG4gICAgICB0aGlzLnRoZXJlSXNBV2lubmVyID0gdGhpcy5wbGF5ZXJUd28ubmFtZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wdXRlckJvYXJkLmdhbWVPdmVyKSB7XG4gICAgICB0aGlzLnRoZXJlSXNBV2lubmVyID0gdGhpcy5wbGF5ZXJPbmUubmFtZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbWFrZU1vdmUoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAodGhpcy50aGVyZUlzQVdpbm5lcikge1xuICAgICAgcmV0dXJuICdHYW1lIG92ZXInO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF0dGFja3NOb3cubmFtZSA9PT0gJ0h1bWFuJykge1xuICAgICAgY29uc3QgbW92ZSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgY29uc3QgeCA9IE51bWJlcihtb3ZlWzBdKTtcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIobW92ZVsxXSk7XG4gICAgICBjb25zb2xlLmxvZyhgQXR0YWNraW5nIGF0IFske3h9LCAke3l9XWApO1xuICAgICAgaWYgKHRoaXMucGxheWVyT25lLmF0dGFja09wcG9uZW50KHgsIHkpICE9PSAnU3VjY2VzcycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01vdmUgZmFpbGVkLiBUcnkgYWdhaW4uJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrc05vdy5uYW1lID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICB0aGlzLnBsYXllclR3by5hdHRhY2tPcHBvbmVudCgpO1xuICAgIH1cblxuICAgIC8vIEltbWVkaWF0ZWx5IHRlcm1pbmF0ZSB0aGUgZ2FtZSBoZXJlIGlmIHRoZXJlIGlzIGEgYm9hcmQgd2l0aCBcImdhbWVPdmVyXCIgc2V0IHRvIHRydWVcbiAgICBpZiAodGhpcy4jZmluZEJvYXJkV2l0aEdhbWVPdmVyKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiNwYXNzVHVybnMoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldFdob3NlVHVybkl0SXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrc05vdy5uYW1lO1xuICB9XG5cbiAgZ2V0V2lubmVyKCkge1xuICAgIHJldHVybiB0aGlzLnRoZXJlSXNBV2lubmVyO1xuICB9XG5cbiAgLy8gZ2V0T3duQm9hcmQocGxheWVyKSB7XG4gIC8vICAgaWYgKHBsYXllciA9PT0gJ0h1bWFuJykge1xuICAvLyAgICAgcmV0dXJuIHRoaXMuaHVtYW5Cb2FyZDtcbiAgLy8gICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ0NvbXB1dGVyJykge1xuICAvLyAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZXJCb2FyZDtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBnZXRFbmVteUJvYXJkKHBsYXllcikge1xuICAvLyAgIGlmIChwbGF5ZXIgPT09ICdIdW1hbicpIHtcbiAgLy8gICAgIHJldHVybiB0aGlzLmNvbXB1dGVyQm9hcmQ7XG4gIC8vICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdDb21wdXRlcicpIHtcbiAgLy8gICAgIHJldHVybiB0aGlzLmh1bWFuQm9hcmQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy4jY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xuICAgIHRoaXMuc3Vua1NoaXBzID0gW107XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgI2NyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAvLyBJbiBlYWNoIHNxdWFyZSBvZiB0aGUgYm9hcmQsIHRoZXJlIGlzIGFuIG9iamVjdCB3aXRoIGEgZmV3IHByb3BlcnRpZXMgdG8gY29udHJvbCB0aGUgZ2FtZSdzIGxvZ2ljXG4gICAgICAgIGJvYXJkW2ldLnB1c2goW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRhaW5zU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBpc0FkamFjZW50VG9Tb21lU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBpc0FkamFjZW50VG9Tb21lU3Vua1NoaXA6IGZhbHNlLFxuICAgICAgICAgICAgaGFzQmVlblRhcmdldHRlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIC8vIEhlbHBlcnMgZm9yIHBsYWNlU2hpcCgpXG4gICNmaXRJbkJvYXJkTGltaXRzKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgLy8gQXJndW1lbnRzIG9mIHRoaXMgbWV0aG9kIGNvbWUgaW4gdHdvIGRpZmZlcmVudCBmbGF2b3JzIOKAlCB0aGV5IGNhbiBiZSBlaXRoZXIgaW5kaXZpZHVhbCBYIGFuZCBZIHZhbHVlcyAoY2FzZSB3aXRoIGEgMS1zcXVhcmUgc2hpcCksIG9yIGFycmF5cyB3aXRoIGNvbWJpbmF0aW9ucyBvZiBYIGFuZCBZIHZhbHVlcyAoY2FzZSB3aXRoIG11bHRpcGxlLXNxdWFyZSBzaGlwcylcbiAgICAvLyBJdCBpcyBuZWNlc3NhcnkgdG8gY2hlY2sgb25seSBpZiB0aGV5IGFyZSBncmVhdGVyIHRoYW4gOSBpbiB0aGUgY29udGV4dCBvZiBhcnJheXMsIGJlY2F1c2Ugc2hpcHMgYXJlIGV4cGFuZGVkIHRvIHRoZSByaWdodC9kb3duIGJ5IGRlZmF1bHQg4oCUIGEgdHdvLXNxdWFyZSBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgYXQgWzAsMF0gcG9wdWxhdGVzIHRvIFswLDBdLCBbMSwwXSBhbmQgbmV2ZXIgdG8gWzAsMF0sIFstMSwgMF1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiBBcnJheS5pc0FycmF5KHkpKSB7XG4gICAgICBjb25zdCB2YWx1ZXNYQW5kWSA9IFsuLi54LCAuLi55XTtcbiAgICAgIGNvbnN0IHhPcllJc091dHNpZGVCb2FyZCA9IHZhbHVlc1hBbmRZLmZpbHRlcigodmFsdWUpID0+IHZhbHVlID4gOSk7XG4gICAgICBpZiAoeE9yWUlzT3V0c2lkZUJvYXJkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCA+IDkgfHwgeSA+IDkgfHwgeCA8IDAgfHwgeSA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhcnJheVdpdGhDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVYID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgY29vcmRpbmF0ZVkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzJdO1xuXG4gICAgLy8gVXNlIHR3byBhcnJheXMgZmlsbGVkIHdpdGggYWxsIHBvc3NpYmxlIG9wdGlvbnMgZm9yIGFkamFjZW50IHNxdWFyZXNcbiAgICAvLyBBIHNxdWFyZSBjYW4gaGF2ZSA4IGFkamFjZW50IHNxdWFyZXMgYXQgbW9zdFxuICAgIGNvbnN0IGFkamFjZW50Q29vcmRpbmF0ZXNPZlggPSBbLTEsIDAsIDEsIDEsIDEsIDAsIC0xLCAtMV07XG4gICAgY29uc3QgYWRqYWNlbnRDb29yZGluYXRlc09mWSA9IFstMSwgLTEsIC0xLCAwLCAxLCAxLCAxLCAwXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZVggKyBhZGphY2VudENvb3JkaW5hdGVzT2ZYW2ldO1xuICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGVZICsgYWRqYWNlbnRDb29yZGluYXRlc09mWVtpXTtcblxuICAgICAgaWYgKHggPiA5IHx8IHkgPiA5IHx8IHggPCAwIHx8IHkgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuY29udGFpbnNTaGlwKSB7XG4gICAgICAgIC8vIFNxdWFyZXMgdGhhdCBhcmUgYSBwYXJ0IG9mIHRoZSBzaGlwIG11c3Qgbm90IGJlIHJlc2VydmVkIGJlY2F1c2UgdGhleSBhcmUgbm90IGFkamFjZW50IGluIGFueSBjYXNlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU2hpcCcpIHtcbiAgICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmlzQWRqYWNlbnRUb1NvbWVTaGlwID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5pc0FkamFjZW50VG9Tb21lU3Vua1NoaXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNjb25maXJtQ29vcmRpbmF0ZXNBcmVOb3RBdmFpbGFibGUoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCByZXN1bHRPZkhlbHBlciA9IHRoaXMuI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAnY29udGFpbnNTaGlwJ1xuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdE9mSGVscGVyO1xuICB9XG5cbiAgI3N0YW5kSW5Bbm90aGVyU2hpcEFkamFjZW50U3F1YXJlcyguLi5jb29yZGluYXRlcykge1xuICAgIGNvbnN0IHJlc3VsdE9mSGVscGVyID0gdGhpcy4jYWNjZXNzUHJvcGVydHlPblNoaXBPYmplY3QoXG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgICdpc0FkamFjZW50VG9Tb21lU2hpcCdcbiAgICApO1xuICAgIHJldHVybiByZXN1bHRPZkhlbHBlcjtcbiAgfVxuXG4gIC8vIFVzZSB0aGUgcmVzdCBvcGVyYXRvciB0byBwbGFjZSBhbGwgYXJndW1lbnRzIGludG8gb25lIGFycmF5IGFuZCB0aGVuIGV4dHJhY3Qgc3BlY2lmaWMgcGFydHMgb2YgaXRcbiAgI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KC4uLmNvb3JkaW5hdGVzQW5kUHJvcGVydHkpIHtcbiAgICBjb25zdCBhcnJheVdpdGhBcmd1bWVudHMgPSBjb29yZGluYXRlc0FuZFByb3BlcnR5O1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhBcmd1bWVudHNbMF1bMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aEFyZ3VtZW50c1swXVsxXTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFycmF5V2l0aEFyZ3VtZW50c1sxXTtcblxuICAgIGxldCB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHgpICYmIEFycmF5LmlzQXJyYXkoeSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBBY2Nlc3MgYSBwcm9wZXJ0eSBvbiB0aGUgc2hpcCB3aXRoIHdoaWNoIHRoZSBtZXRob2Qgd2FzIGNhbGxlZCBpbiBhIGxlc3MgaGFyZC1jb2RlZCBtYW5uZXIgd2l0aCBhIGRvdCBub3RhdGlvblxuICAgICAgICB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uID0gdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHhbaV0sIHlbaV0pW1xuICAgICAgICAgIHByb3BlcnR5XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uID0gdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpW3Byb3BlcnR5XTtcblxuICAgICAgaWYgKHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrSWZNYXhOdW1iZXJPZlNoaXBzSXNSZWFjaGVkKCkge1xuICAgIGlmICh0aGlzLmFsbFNoaXBzLmxlbmd0aCA+PSAxMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjbGltaXRQb3NzaWJsZUxlbmd0aE9mU2hpcHMoc2hpcCkge1xuICAgIGlmIChzaGlwLmxlbmd0aCA8IDEgfHwgc2hpcC5sZW5ndGggPiA0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBzaGlwU2l6ZSwgZGlyZWN0aW9uID0gJ2hvcicpIHtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcFNpemUpO1xuXG4gICAgaWYgKHRoaXMuI2NoZWNrSWZNYXhOdW1iZXJPZlNoaXBzSXNSZWFjaGVkKCkpIHtcbiAgICAgIHJldHVybiAnVGhlcmUgYXJlIDEwIHNoaXBzIG9uIHRoZSBib2FyZC4gVGhlIGxpbWl0IGlzIHJlYWNoZWQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy4jbGltaXRQb3NzaWJsZUxlbmd0aE9mU2hpcHMoc2hpcCkpIHtcbiAgICAgIHJldHVybiAnQ2Fubm90IHBsYWNlIGEgc2hpcCBvZiB0aGlzIGxlbmd0aC4gTWluIGxlbmd0aCBpcyAxLiBNYXggbGVuZ3RoIGlzIDQnO1xuICAgIH1cblxuICAgIGlmIChzaGlwLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIENyZWF0ZSB0d28gYXJyYXlzIHRvIHBsYWNlIHNoaXBzIG92ZXIgbXVsdGlwbGUgc3F1YXJlcywgZG9pbmcgaXQgaW4gYm90aCBkaXJlY3Rpb25zXG4gICAgICBjb25zdCBhbGxWYWx1ZXNPZlggPSBbXTtcbiAgICAgIGNvbnN0IGFsbFZhbHVlc09mWSA9IFtdO1xuXG4gICAgICAvLyBJZiBwbGFjZWQgaG9yaXpvbnRhbGx5LCB0aGUgc2hpcCdzIGZpcnN0IHNxdWFyZSB3aWxsIGdlbmVyYXRlIHRoZSByZXN0IG9mIHNxdWFyZXMgdG8gdGhlIHJpZ2h0LCB3aXRob3V0IGNoYW5naW5nIHRoZSByb3dcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFsbFZhbHVlc09mWC5wdXNoKHgpO1xuICAgICAgICAgIGFsbFZhbHVlc09mWS5wdXNoKHkpO1xuICAgICAgICAgIHggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBwbGFjZWQgdmVydGljYWxseSwgdGhlIHNoaXAncyBmaXJzdCBzcXVhcmUgd2lsbCBnZW5lcmF0ZSB0aGUgcmVzdCBvZiBzcXVhcmVzIGRvd24sIHdpdGhvdXQgY2hhbmdpbmcgdGhlIGNvbHVtblxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXInKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFsbFZhbHVlc09mWC5wdXNoKHgpO1xuICAgICAgICAgIGFsbFZhbHVlc09mWS5wdXNoKHkpO1xuICAgICAgICAgIHkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBhbnkgb2YgdGhlc2UgcmVzdHJpY3Rpb25zIGlzIHZpb2xhdGVkIGJlZm9yZSBwbGFjaW5nIGEgc2hpcC4gSWYgeWVzLCB0aGUgc2hpcCBpcyBub3QgcGxhY2VkIG9uIHRoZSBib2FyZFxuICAgICAgaWYgKCF0aGlzLiNmaXRJbkJvYXJkTGltaXRzKGFsbFZhbHVlc09mWCwgYWxsVmFsdWVzT2ZZKSkge1xuICAgICAgICByZXR1cm4gJ0Nhbm5vdCBwbGFjZSB0aGUgc2hpcCBvdXRzaWRlIHRoZSBib2FyZCc7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLiNjb25maXJtQ29vcmRpbmF0ZXNBcmVOb3RBdmFpbGFibGUoYWxsVmFsdWVzT2ZYLCBhbGxWYWx1ZXNPZlkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdDYW5ub3QgcGxhY2UgdGhlIHNoaXAgaW4gc3F1YXJlcyB0YWtlbiBieSBhbm90aGVyIHNoaXAnO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy4jc3RhbmRJbkFub3RoZXJTaGlwQWRqYWNlbnRTcXVhcmVzKGFsbFZhbHVlc09mWCwgYWxsVmFsdWVzT2ZZKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnQ2Fubm90IHBsYWNlIHRoZSBzaGlwIHJpZ2h0IGJlc2lkZSBhbm90aGVyIHNoaXAnO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlcmUgaXMgb25lIHNxdWFyZSBvZiBhIGdhcCBiZXR3ZWVuIHR3byBzaGlwcyAoaW4gYWxsIGRpcmVjdGlvbnMpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKFxuICAgICAgICAgIGFsbFZhbHVlc09mWFtpXSxcbiAgICAgICAgICBhbGxWYWx1ZXNPZllbaV1cbiAgICAgICAgKS5jb250YWluc1NoaXAgPSBzaGlwO1xuXG4gICAgICAgIC8vIFN0b3JlIHNoaXBzIGluc2lkZSB0aGUgYWxsU2hpcHMgYXJyYXkgd2l0aCB0aGVpciBjb29yZGluYXRlcyB0byBiZSBhYmxlIHRvIGVhc2llciBhbnN3ZXIgaWYgdGhlIGF0dGFja2VkIGNvb3JkaW5hdGVzIGJlbG9uZyB0byBhbnkgc2hpcFxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaCh7XG4gICAgICAgICAgICBzaGlwSW5zdGFuY2U6IHNoaXAsXG4gICAgICAgICAgICBjb29yZGluYXRlczogW1thbGxWYWx1ZXNPZlhbaV0sIGFsbFZhbHVlc09mWVtpXV1dLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWxsU2hpcHNcbiAgICAgICAgICAgIC5hdCgtMSlcbiAgICAgICAgICAgIC5jb29yZGluYXRlcy5wdXNoKFthbGxWYWx1ZXNPZlhbaV0sIGFsbFZhbHVlc09mWVtpXV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgcmVzZXJ2ZUFkamFjZW50U3F1YXJlcygpIGluIGEgc2VwYXJhdGUgbG9vcCBiZWNhdXNlIGl0IGlzIGltcG9ydGFudCBhbGwgc2hpcHMgdG8gYmUgcHJpb3JseSBjcmVhdGVkIHRvIHJlc2VydmUgb25seSB0cnVseSBhZGphY2VudCBzcXVhcmVzLiBUaGUgb3RoZXIgMiBzcXVhcmVzIG9mIGEgc2hpcCB3aXRoIHRoZSBsZW5ndGggb2YgMyBhcmUgbm90IGFkamFjZW50OyBUaGV5IGFyZSBhIHBhcnQgb2YgdGhlIHNoaXBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgIGFsbFZhbHVlc09mWFtpXSxcbiAgICAgICAgICBhbGxWYWx1ZXNPZllbaV0sXG4gICAgICAgICAgJ2lzQWRqYWNlbnRUb1NvbWVTaGlwJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICh0aGlzLiNzdGFuZEluQW5vdGhlclNoaXBBZGphY2VudFNxdWFyZXMoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuICdDYW5ub3QgcGxhY2UgdGhlIHNoaXAgcmlnaHQgYmVzaWRlIGFub3RoZXIgc2hpcCc7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLiNmaXRJbkJvYXJkTGltaXRzKHgsIHkpKSB7XG4gICAgICAgIHJldHVybiAnQ2Fubm90IHBsYWNlIHRoZSBzaGlwIG91dHNpZGUgdGhlIGJvYXJkJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jY29uZmlybUNvb3JkaW5hdGVzQXJlTm90QXZhaWxhYmxlKHgsIHkpKSB7XG4gICAgICAgIHJldHVybiAnQ2Fubm90IHBsYWNlIHRoZSBzaGlwIGluIHNxdWFyZXMgdGFrZW4gYnkgYW5vdGhlciBzaGlwJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmNvbnRhaW5zU2hpcCA9IHNoaXA7XG4gICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKHgsIHksICdpc0FkamFjZW50VG9Tb21lU2hpcCcpO1xuICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKHsgc2hpcEluc3RhbmNlOiBzaGlwLCBjb29yZGluYXRlczogW3gsIHldIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhlbHBlcnMgZm9yIHJlY2VpdmVBdHRhY2soKVxuICAjdGFyZ2V0Q29vcmRpbmF0ZXNPdXRzaWRlQm9hcmQoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhdHRhY2tJc091dHNpZGVCb2FyZCA9IGFycmF5V2l0aENvb3JkaW5hdGVzLmZpbHRlcigoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGUgPiA5IHx8IGNvb3JkaW5hdGUgPCAwO1xuICAgIH0pO1xuXG4gICAgaWYgKGF0dGFja0lzT3V0c2lkZUJvYXJkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjY29uZmlybVNxdWFyZUhhc0JlZW5UYXJnZXR0ZWRBbHJlYWR5KGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeCA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcblxuICAgIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaGFzQmVlblRhcmdldHRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjY29uZmlybVNxdWFyZUlzRGlzYWJsZWRCeUFub3RoZXJTaGlwKGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeCA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcblxuICAgIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaXNBZGphY2VudFRvU29tZVN1bmtTaGlwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICNmaW5kVGFyZ2V0dGVkU2hpcChhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhDb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB5ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV07XG5cbiAgICBpZiAodGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmNvbnRhaW5zU2hpcCkge1xuICAgICAgY29uc29sZS5sb2coJ0hpdCBhbiBlbmVteSBzaGlwISEhJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ01pc3NlZCBzaG90ISEhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrSWZBbGxTaGlwc0hhdmVCZWVuRGVzdHJveWVkKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuYWxsU2hpcHMubGVuZ3RoID09PSB0aGlzLnN1bmtTaGlwcy5sZW5ndGggJiZcbiAgICAgIHRoaXMuYWxsU2hpcHMubGVuZ3RoICYmXG4gICAgICB0aGlzLnN1bmtTaGlwcy5sZW5ndGhcbiAgICApIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNjaGVja0dhbWVTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5nYW1lT3Zlcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKC4uLnBhaXJPZkNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBwYWlyT2ZDb29yZGluYXRlcztcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgaWYgKHRoaXMuI2NoZWNrR2FtZVN0YXRlKCkpIHtcbiAgICAgIHJldHVybiAnR2FtZSBvdmVyJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuI3RhcmdldENvb3JkaW5hdGVzT3V0c2lkZUJvYXJkKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuICdDYW5ub3QgdGFyZ2V0IG5vbi1leGlzdGVudCBjb29yZGluYXRlcyc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuI2NvbmZpcm1TcXVhcmVIYXNCZWVuVGFyZ2V0dGVkQWxyZWFkeShhcnJheVdpdGhDb29yZGluYXRlcylcbiAgICApIHtcbiAgICAgIHJldHVybiAnQ29vcmRpbmF0ZXMgaGF2ZSBiZWVuIHRhcmdldHRlZCBhbHJlYWR5JztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy4jY29uZmlybVNxdWFyZUlzRGlzYWJsZWRCeUFub3RoZXJTaGlwKGFycmF5V2l0aENvb3JkaW5hdGVzKVxuICAgICkge1xuICAgICAgcmV0dXJuICdBbm90aGVyIHN1bmsgc2hpcCBoYXMgbWFkZSB0aGVzZSBjb29yZGluYXRlcyB1bmF2YWlsYWJsZSc7XG4gICAgfVxuXG4gICAgLy8gVGFyZ2V0IHRoZSBwcm92aWRlZCBzcXVhcmUgc3VjY2Vzc2Z1bGx5IG9ubHkgaWYgbm9uZSBvZiB0aGUgYWJvdmUgY29uZGl0aW9ucyB0ZXJtaW5hdGVzIHRoaXMgbWV0aG9kXG4gICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmhhc0JlZW5UYXJnZXR0ZWQgPSB0cnVlO1xuXG4gICAgLy8gaGFzQmVlblRhcmdldHRlZCBwcm9wZXJ0eSBjYW4gZWl0aGVyIG1lYW4gYSBzdWNjZXNzZnVsIGF0dGFjayAoaGl0IGEgc2hpcCkgb3IgYSBmYWlsZWQgb25lIChhIG1pc3NlZCBzaG90KVxuICAgIGlmICh0aGlzLiNmaW5kVGFyZ2V0dGVkU2hpcChhcnJheVdpdGhDb29yZGluYXRlcykpIHtcbiAgICAgIGNvbnN0IHRhcmdldHRlZFNoaXAgPSB0aGlzLmdldFNwZWNpZmljU2hpcCh4LCB5KTtcbiAgICAgIHRhcmdldHRlZFNoaXAuaGl0KCk7XG5cbiAgICAgIGlmICh0YXJnZXR0ZWRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzLnB1c2godGFyZ2V0dGVkU2hpcCk7XG4gICAgICAgIGNvbnN0IHNoaXBTcXVhcmVzID0gdGhpcy5nZXRTcGVjaWZpY1NoaXAoeCwgeSwgJ2Nvb3JkaW5hdGVzJyk7XG5cbiAgICAgICAgLy8gU3F1YXJlcyBhcm91bmQgYSBzdW5rIHNoaXAgYXJlIG5vdCBwb3NzaWJsZSBmb3IgYXR0YWNrcyBiZWNhdXNlIHRoZXkgY2Fubm90IGNvbnRhaW4gYW5vdGhlciBzaGlwIGJhc2VkIG9uIHRoZSBydWxlcyBvZiBzaGlwcycgcGxhY2luZyDigJQgdGhlcmUgbXVzdCBiZSBhIG9uZS1zcXVhcmUgZ2FwIGJldHdlZW4gdHdvIGRpZmZlcmVudCBzaGlwc1xuICAgICAgICBpZiAodGFyZ2V0dGVkU2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgICAgc2hpcFNxdWFyZXNbMF0sXG4gICAgICAgICAgICBzaGlwU3F1YXJlc1sxXSxcbiAgICAgICAgICAgICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgICAgICBzaGlwU3F1YXJlc1tpXVswXSxcbiAgICAgICAgICAgICAgc2hpcFNxdWFyZXNbaV1bMV0sXG4gICAgICAgICAgICAgICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdhbWVib2FyZCBzaG91bGQga2VlcCB0cmFjayBvZiBpdHMgdGVybWluYXRpb24gc3RhdGUgYmVjYXVzZSBHYW1lTG9vcCB3aWxsIHJlbHkgb24gaXQgbGF0ZXJcbiAgICAgICAgdGhpcy4jY2hlY2tJZkFsbFNoaXBzSGF2ZUJlZW5EZXN0cm95ZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdTdWNjZXNzJztcbiAgfVxuXG4gIGdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLmF0KHgpLmF0KHkpLmF0KDApO1xuICB9XG5cbiAgZ2V0QWxsU2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsU2hpcHM7XG4gIH1cblxuICBnZXRTdW5rU2hpcHNQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdW5rU2hpcHM7XG4gIH1cblxuICBnZXRTcGVjaWZpY1NoaXAoeCwgeSwgcHJvcGVydHkgPSAnc2hpcEluc3RhbmNlJykge1xuICAgIC8vIEFycmF5IGFsbFNoaXBzIGlzIGFuIGFycmF5IGZlYXR1cmluZyBvYmplY3RzIHdpdGggdGhlICdzaGlwSW5zdGFuY2UnIGFuZCAnY29vcmRpbmF0ZXMnIHByb3BlcnRpZXNcbiAgICAvLyBJZiBpbnNpZGUgJ3NoaXBJbnN0YW5jZScgdGhlcmUgaXMgYSBzaGlwIHdpdGggdGhlIGxlbmd0aCBvZiAxLCB0aGVuIGl0cyBjb29yZGluYXRlcyBhcmUgc3RvcmVkIGluc2lkZSBhIHNpbmdsZSBhcnJheSDigJQgWy4uLl1cbiAgICAvLyBIb3dldmVyLCBpZiBpdCdzIGEgbG9uZ2VyIHNoaXAsIHRoZW4gYSBmZXcgZGlmZmVyZW50IGNvb3JkaW5hdGVzIGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNoaXAgYW5kIGF0dGFja2luZyBhbnkgb2YgdGhlbSBzaG91bGQgaGl0IHRoYXQgc2hpcC4gSW4gdGhhdCBjYXNlLCBzdG9yZSBpbmRpdmlkdWFsIGNvb3JkaW5hdGVzIGluc2lkZSBhbm90aGVyIGFycmF5IOKAlCBbWy4uLl0sIFsuLi5dXVxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdldEFsbFNoaXBzKCkuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5jb29yZGluYXRlc1swXSkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY29vcmRpbmF0ZXNbMF0gPT09IHggJiYgaXRlbS5jb29yZGluYXRlc1sxXSA9PT0geVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoaXRlbS5jb29yZGluYXRlc1tpXVswXSA9PT0geCAmJiBpdGVtLmNvb3JkaW5hdGVzW2ldWzFdID09PSB5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBbMF1bcHJvcGVydHldO1xuICB9XG59XG4iLCJleHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3bykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vd25Cb2FyZCA9IGJvYXJkT25lO1xuICAgIHRoaXMuZW5lbXlCb2FyZCA9IGJvYXJkVHdvO1xuICB9XG5cbiAgYXR0YWNrT3Bwb25lbnQoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxufVxuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3bykge1xuICAgIHN1cGVyKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3byk7XG4gICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gdGhpcy4jY3JlYXRlQWxsUG9zc2libGVNb3ZlcygpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGFsbCBwb3NzaWJsZSBtb3Zlcy4gQWZ0ZXIgZWFjaCBtb3ZlLCB0aGF0IG1vdmUgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBmcm9tIHBvc3NpYmxlTW92ZXMgc28gdGhhdCBtb3ZlcyBhcmUgbmV2ZXIgcmVwZWF0ZWRcbiAgI2NyZWF0ZUFsbFBvc3NpYmxlTW92ZXMoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIG1vdmVzLnB1c2goYCR7aX0ke2p9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgYXR0YWNrT3Bwb25lbnQoKSB7XG4gICAgaWYgKCF0aGlzLnBvc3NpYmxlTW92ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ1RoZXJlIGFyZSBubyBwb3NzaWJsZSBtb3ZlcyBsZWZ0JztcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHggPSBOdW1iZXIodGhpcy5wb3NzaWJsZU1vdmVzW3JhbmRvbUluZGV4XVswXSk7XG4gICAgY29uc3QgeSA9IE51bWJlcih0aGlzLnBvc3NpYmxlTW92ZXNbcmFuZG9tSW5kZXhdWzFdKTtcblxuICAgIGNvbnNvbGUubG9nKGBBdHRhY2tpbmcgYXQgWyR7eH0sICR7eX1dYCk7XG4gICAgdGhpcy5lbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gdGhpcy5wb3NzaWJsZU1vdmVzLmZpbHRlcigobW92ZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vdmUgIT09IGAke3h9JHt5fWA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW3gsIHldOyAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgdG8gcGFzcyBhIHRlc3QgdGhhdCBlbnN1cmVzIENvbXB1dGVyIGRvZXMgaGl0IHRoZSBQbGF5ZXIncyBib2FyZCBhdCB0aGUgY29vcmRpbmF0ZXNcbiAgfVxuXG4gIGdldExlbmd0aE9mUG9zc2libGVNb3Zlc0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnBvc3NpYmxlTW92ZXMubGVuZ3RoO1xuICB9XG59XG4iLCJleHBvcnQgeyBTaGlwIH07XG5jbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTdW5rKCkpIHtcbiAgICAgIHJldHVybiAnQ2Fubm90IGhpdCB0aGUgc2hpcC4gSXQgaXMgc3VuayBhbHJlYWR5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMudGltZXNIaXQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGltZXNIaXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lc0hpdDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gJy4vZ2FtZUxvb3AnO1xuLy8gZXhwb3J0IHsgc3RhcnRHYW1lIH07XG5cbmNvbnN0IGZpZWxkRm9yWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN4LXZhbHVlJyk7XG5jb25zdCBmaWVsZEZvclkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeS12YWx1ZScpO1xuY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWJ1dHRvbicpO1xuY29uc3QgZm9ybUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lLWJ1dHRvbicpO1xubmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc3RhcnRHYW1lKCk7XG59KTtcblxubGV0IGdhbWVMb29wID0gbnVsbDtcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIGdhbWUuLi4nKTtcblxuICBnYW1lTG9vcCA9IG5ldyBHYW1lTG9vcCgpO1xuICBjb25zb2xlLmxvZygnUGxheWVycyBhbmQgYm9hcmRzIGFyZSBiZWluZyBjcmVhdGVkLi4uJyk7XG5cbiAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXkpO1xufVxuXG5mdW5jdGlvbiBwbGF5KCkge1xuICBsZXQgY3VycmVudFBsYXllcjtcblxuICAvLyBQbGF5ZXIgbWFrZXMgYSBtb3ZlXG4gIGN1cnJlbnRQbGF5ZXIgPSBnYW1lTG9vcC5nZXRXaG9zZVR1cm5JdElzKCk7XG4gIGNvbnNvbGUubG9nKGBJdCBpcyAke2N1cnJlbnRQbGF5ZXJ9J3MgbW92ZWApO1xuICBjb25zdCB4ID0gZmllbGRGb3JYLnZhbHVlO1xuICBjb25zdCB5ID0gZmllbGRGb3JZLnZhbHVlO1xuICBmb3JtQmxvY2sucmVzZXQoKTtcbiAgaWYgKCFnYW1lTG9vcC5tYWtlTW92ZShgJHt4fSR7eX1gKSkge1xuICAgIHBsYXkoKTtcbiAgfVxuICBjb25zb2xlLmxvZygnVHVybiBoYXMgYmVlbiBwYXNzZWQgYnkgUGxheWVyT25lJyk7XG5cbiAgLy8gQ29tcHV0ZXIgbWFrZXMgYW4gaW1tZWRpYXRlIG1vdmVcbiAgY3VycmVudFBsYXllciA9IGdhbWVMb29wLmdldFdob3NlVHVybkl0SXMoKTtcbiAgY29uc29sZS5sb2coYEl0IGlzICR7Y3VycmVudFBsYXllcn0ncyBtb3ZlYCk7XG4gIGdhbWVMb29wLm1ha2VNb3ZlKCk7XG4gIGNvbnNvbGUubG9nKCdUdXJuIGhhcyBiZWVuIHBhc3NlZCBieSBQbGF5ZXJUd28nKTtcbn1cblxuLy8gQ29uc29sZSBsb2cgaWYgdGhlIGF0dGFjayBoaXQgYSBzaGlwIG9yIGlzIGEgbWlzc2VkIHNob3Rcbi8vIGNvbnNvbGUubG9nKCdHYW1lIG92ZXIuLi4nKTtcbi8vIGNvbnNvbGUubG9nKCdXaW5uZXIgaXMgSHVtYW4vQ29tcHV0ZXIuLi4nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==