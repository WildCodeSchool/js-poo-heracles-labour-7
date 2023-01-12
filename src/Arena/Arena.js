class Arena {
  constructor(hero, monsters, url, size = 10) {
    this.hero = hero;
    this.monsters = monsters;
    this.size = size;
    this.message = "";
    this.tiles = [...grass, ...water, ...bush, ...building];
  }

  /**
   * Calcul the distance between two fighters
   * @param {Object} fighter1
   * @param {Object} fighter2
   * @returns Number
   */
  getDistance(fighter1, fighter2) {
    return Math.sqrt(Math.pow(fighter2.x - fighter1.x, 2) + Math.pow(fighter2.y - fighter1.y, 2)).toFixed(2);
  }

  /**
   * Find the tile corresponding to the coordinates
   * @param {*} x Number
   * @param {*} y Number
   * @returns Object Tile
   */
  getTile(x, y) {
    return this.tiles.filter(tile => tile.x === x && tile.y === y)
  }

  /**
   * Calcul from the distance of the fight is posssible
   * @param {Object} attacker
   * @param {Obect} defender
   * @returns Boolean
   */
  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange()
  }

  /**
   * Calcul the new coordinates after the move if possible
   * @param {String} direction
   * @returns Object with Number
   */
  move(direction, fighter) {
    let y = fighter.y;
    let x = fighter.x;
    if (direction === "N") fighter.y -= 1;
    if (direction === "S") fighter.y += 1;
    if (direction === "E") fighter.x -= 1;
    if (direction === "W") fighter.x += 1;

    const tile = this.getTile(fighter.x, fighter.y);

    if (!this.checkOnMap(fighter.x, fighter.y)) {
      this.message = "Moving outside the map is not possible";
    } else if (this.CheckNoMonster(fighter)) {
      this.message = "Position already used, you can t move here";
    } else if (tile[0] && !tile[0].isCrossable(fighter)) {
      this.message = "Moving over is not possible";
    } else {
      return { x, y };
    }

    document.getElementById('error').innerHTML = this.message;
    fighter.x = x;
    fighter.y = y;
  }

  /**
   * Move all moveable player on the arena
   * @param {string} direction
   * @param {object} hero
   */
  globalMove(direction, hero) {
    this.move(direction, hero);

    this.monsters
      .filter(monster => monster.moveable)
      .forEach(moveable => this.move(moveable.getDirection(moveable), moveable))
  }

  /**
   * Check if the coordinate are on the map
   * @param {Number} x
   * @param {Number} y
   * @returns Boolean
   */
  checkOnMap(x, y) {
    return (x >= 0 && x < this.size) && (y >= 0 && y < this.size)
  }

  /**
   * Check of the presence of a monster on the coordinates
   * @param {Number} x
   * @param {Number} y
   * @returns Boolean
   */
  CheckNoMonster(fighter) {
    return this.monsters.some(monster => monster != fighter && monster.isAlive() && (monster.x === fighter.x && monster.y === fighter.y))
  }

  /**
   * Check if monsters are still alive
   * @returns Boolean
   */
  checkBattle() {
    return this.monsters.some(monster => monster.life > 0);
  }

  /**
   * Launch the battle between our hero and a monsters
   * @param {Number} id
   * @returns Boolean
   */
  battle(index) {
    let msg = 'This monster is not touchable, please move first';
    let death = false;

    if (this.isTouchable(this.hero, this.monsters[index])) {
      this.hero.fight(this.monsters[index]);

      if (this.isTouchable(this.monsters[index], this.hero && this.monsters[index].isAlive())) {
        this.monsters[index].fight(this.hero);
      }

      if (!this.monsters[index].isAlive()) {
        death = true;
        msg = `${this.hero.name} won 🗡️  ${this.hero.life} 💙 ${this.monsters[index].name} is dead !!!`;
        this.hero.updateExp(this.monsters[index].experience)
      } else if (!this.hero.isAlive()) {
        death = true;
        msg = `${this.monsters[index].name} won 🗡️, your're dead !!!`
      } else {
        msg = `${this.hero.name} 💙 ${this.hero.life} 🗡️  ${this.monsters[index].name} 💙 ${this.monsters[index].life}`
      }

    }

    if (!this.checkBattle()) {
      msg = `${this.hero.name} won this battle. All monsters are dead. Congratulations`;
    }

    document.getElementById("error").innerText = msg;
    return death;
  }

  /**
   * Change the type of tile on the hero coordinates if possible
   * @returns boolean
   */
  digArena() {
    if (this.hero.accessorie && !this.hero.accessorie.role === "diggeable") {
      document.getElementById("error").innerText = 'You can t dig without a proper accessorie';
      return false;
    }

    const tile = this.tiles.find(tile => tile instanceof Grass && tile.x === this.hero.x && tile.y === this.hero.y)
    if (!tile) {
      document.getElementById("error").innerText = 'You can t dig here';
      return false;
    }

    tile.dig();
    this.fill(tile);
    this.checkVictory();

    return true;
  }

  /**
   * Check if the building tile are adjacente to water or not
   */
  checkVictory() {
    const buildTyle = this.tiles.filter(tile => tile instanceof Building);
    buildTyle.forEach(build => {
      if (this.getAdjacentTile(build).some(tile => tile instanceof Water)) {
        document.getElementById("error").innerText = 'Congratulations!!! you won';
      }
    })
  }

  /**
   * Change the type of tile to water if the properties is next to water tile
   * @param {object} tile
   */
  fill(tile) {
    if (this.getAdjacentTile(tile).some(tile => tile instanceof Water)) {
      this.replaceTile(tile);
      this.getAdjacentTile(tile).forEach(adj => {
        if (adj instanceof Grass && adj.digged) {
          this.fill(adj)
        }
      });
    }
  }

  /**
   * Toggle the tile on the arena
   * @param {Object} tile
   */
  replaceTile(tile) {
    this.addTile(tile);
    this.removeTile(tile)
  }

  /**
   * Adding a new tile on the arena
   * @param {Object} tile
   */
  addTile(tile) {
    this.tiles = [...this.tiles, new Water(tile.x, tile.y)]
  }

  /**
   * Removing a tile on the arena
   * @param {object} myTile
   */
  removeTile(myTile) {
    this.tiles = [...this.tiles.filter(tile => !(myTile.x === tile.x && myTile.y === tile.y && tile instanceof Grass))]
  }

  /**
   * Get all adjacente tile
   * @param {object} mytile
   * @returns Array of Object
   */
  getAdjacentTile(mytile) {
    return [
      this.tiles.find(tile => mytile.x + 1 === tile.x && mytile.y === tile.y),
      this.tiles.find(tile => mytile.x - 1 === tile.x && mytile.y === tile.y),
      this.tiles.find(tile => mytile.y + 1 === tile.y && mytile.x === tile.x),
      this.tiles.find(tile => mytile.y - 1 === tile.y && mytile.x === tile.x)
    ]
  }
}
