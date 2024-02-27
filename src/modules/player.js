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
      return false;
    }

    let x;
    let y;
    let attemptedAttack;

    do {
      const randomIndex = Math.floor(Math.random() * this.possibleMoves.length);
      x = Number(this.possibleMoves[randomIndex][0]);
      y = Number(this.possibleMoves[randomIndex][1]);

      attemptedAttack = this.enemyBoard.receiveAttack(x, y);
      this.possibleMoves = this.possibleMoves.filter((move) => {
        return move !== `${x}${y}`;
      });
    } while (!attemptedAttack);

    return [x, y]; // Return an array of coordinates to pass a test that ensures Computer does hit the Player's board at the coordinates
  }

  getLengthOfPossibleMovesArray() {
    return this.possibleMoves.length;
  }
}
