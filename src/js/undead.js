import Character from './character';
import types from './app';

class Undead extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 25;
    this.defence = 25;
    this.type = types.Undead;
  }
}

export default Undead;
