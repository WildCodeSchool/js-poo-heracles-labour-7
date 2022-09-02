class Grass extends Tile {
  constructor(x, y) {
    super(x, y)
    this.image = "../../images/grass.png";
  }

  dig() {
    this.digged = !this.digged;
    this.image = this.digged ? "../../images/hole.png" : "../../images/grass.png";
  }
}