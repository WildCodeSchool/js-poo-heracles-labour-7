class Monster extends Fighter {
  constructor(name, x, y) {
    super(name, x, y)
    this.weapon = null;
    this.shield = null;
    this.experience = 500;
  }

  /**
   * Create a random direction for moving
   * @returns string
   */
  getDirection() {
    const direction = {
      "1": "N",
      "2": "S",
      "3": "E",
      "4": "W"
    }

    return direction[Math.floor(Math.random() * 4) + 1];
  }
}
