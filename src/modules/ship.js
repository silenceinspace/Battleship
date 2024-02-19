export { Ship };
class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    if (this.isSunk()) {
      return false;
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
