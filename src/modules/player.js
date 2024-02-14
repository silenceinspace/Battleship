export { Player };

class Player {
  constructor(name, boardOne, boardTwo) {
    this.name = name;
    this.ownBoard = boardOne;
    this.enemyBoard = boardTwo;
  }

  // Use the rest ... operator because computer does not provide any arguments
  attackOpponent(...coordinates) {
    if (this.name !== 'Computer') {
      const x = coordinates[0];
      const y = coordinates[1];
      this.enemyBoard.receiveAttack(x, y);
    }

    if (this.name === 'Computer') {
      console.log('Computers move:')
      let x;
      let y;
      do {
        x = Math.floor(Math.random() * 2);
        y = Math.floor(Math.random() * 2);
        console.log(x, y);
      } while (this.enemyBoard.receiveAttack(x, y) !== 'Registered attack');

      return [x, y];
    }
  }
}
