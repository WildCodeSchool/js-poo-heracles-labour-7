class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = "";
    this.crossable = true;
  }

  /**
   * Get the crossable propertie
   * @params {object} Useless on this method but used on Bush
   * @returns boolean
   */
  isCrossable(monster) {
    return this.crossable;
  }
}