export { Player, Computer };

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

  // Create all possible moves. After each move, that move is going to be removed from possibleMoves so that moves are never repeated. However, adjacentToSomeSunkShip moves are reserved. They are removed only when computer tries to use them but they apparently do not count as successful moves
  #createAllPossibleMoves() {
    const moves = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        moves.push(`${i}${j}`);
      }
    }

    return moves;
  }

  attackOpponent(...smartMove) {
    // If computer hits a ship partially, the smartMove argument is given
    if (smartMove[0]) {
      const [x, y] = smartMove;
      this.enemyBoard.receiveAttack(x, y);
      this.possibleMoves = this.possibleMoves.filter((move) => {
        return move !== `${x}${y}`;
      });
    } else {
      let x;
      let y;
      let attemptedAttack;
      
      // This loop might have a few iterations if out of possibleMoves, computer chooses a move that is listed there even though it is no longer available (e.g. adjacentToSomeSunkShip). Coming across those moves here, they will be manually removed from possibleMoves. And computer eventually makes a legal move and moves the game forward
      do {
        const randomIndex = Math.floor(
          Math.random() * this.possibleMoves.length
        );
        x = this.possibleMoves[randomIndex][0];
        y = this.possibleMoves[randomIndex][1];

        attemptedAttack = this.enemyBoard.receiveAttack(x, y);
        this.possibleMoves = this.possibleMoves.filter((move) => {
          return move !== `${x}${y}`;
        });
      } while (!attemptedAttack);

      return [x, y]; // Return an array of coordinates because they are important to access a specific square in the UI implementation. When human clicks manually on squares, it is easy to track but computer must process this in a different way by returning the number of square (div) it attacked
    }
  }

  getLengthOfPossibleMovesArray() {
    return this.possibleMoves.length;
  }
}
