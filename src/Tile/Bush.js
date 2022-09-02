class Bush extends Tile {
  constructor(x, y) {
    super(x, y)
    this.image = "../../images/bush.png";
    this.crossable = false;
  }

  /**
   * Get the crossable propertie
   * @params {object} monster
   * @returns boolean
   */
  isCrossable(monster) {
    return (monster instanceof Hind) ? true : this.crossable;
  }
}