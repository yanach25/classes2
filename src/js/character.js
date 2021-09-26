class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('name should be type of string');
    }

    if (name.length < 2) {
      throw new Error('name should be more or equal 2');
    }

    if (name.length > 10) {
      throw new Error('name should be less or equal 10');
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('The person is dead. You can not up his level');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (typeof points !== 'number') {
      throw new Error('points should be type of number');
    }

    if (points < 1) {
      throw new Error('Points should be positive');
    }

    this.health -= points * (1 - this.defence / 100);

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export default Character;
