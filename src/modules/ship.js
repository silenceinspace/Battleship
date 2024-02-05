export { Ship };
class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    this.timesHit += 1;
    return true;
  }

  isSunk() {
    if (this.length === this.timesHit) {
      return true;
    } else {
      return false;
    }
  }
}
