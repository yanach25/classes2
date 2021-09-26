import types from '../app';
import Character from '../character';
import Swordsman from '../swordsman';
import Bowerman from '../bowerman';
import Magician from '../magican';
import Zombie from '../zombie';
import Undead from '../undead';
import Daemon from '../daemon';

describe('test app.js', () => {
  it('zombie should be created', () => {
    const pers = new Zombie('Tom');

    const mockedTom = {
      attack: 40,
      health: 100,
      level: 1,
      name: 'Tom',
      defence: 10,
      type: types.Zombie,
    };

    expect(pers).toEqual(mockedTom);
  });

  it('Bowerman should be created', () => {
    const pers = new Bowerman('Tom');

    const mockedTom = {
      attack: 25,
      health: 100,
      level: 1,
      name: 'Tom',
      defence: 25,
      type: types.Bowman,
    };

    expect(pers).toEqual(mockedTom);
  });

  it('Swordsman should be created', () => {
    const pers = new Swordsman('Tom');

    const mockedTom = {
      attack: 40,
      health: 100,
      level: 1,
      name: 'Tom',
      defence: 10,
      type: types.Swordsman,
    };

    expect(pers).toEqual(mockedTom);
  });

  it('Magician should be created', () => {
    const pers = new Magician('Tom');

    const mockedTom = {
      attack: 10,
      health: 100,
      level: 1,
      name: 'Tom',
      defence: 40,
      type: types.Magician,
    };

    expect(pers).toEqual(mockedTom);
  });

  it('Daemon should be created', () => {
    const pers = new Daemon('Tom');

    const mockedTom = {
      attack: 10,
      health: 100,
      level: 1,
      name: 'Tom',
      defence: 40,
      type: types.Daemon,
    };

    expect(pers).toEqual(mockedTom);
  });

  it('Undead should be created', () => {
    const pers = new Undead('Tom');

    const mockedTom = {
      attack: 25,
      health: 100,
      level: 1,
      name: 'Tom',
      defence: 25,
      type: types.Undead,
    };

    expect(pers).toEqual(mockedTom);
  });

  it('throw error name is not type of string', () => {
    expect(() => new Character(20)).toThrow('name should be type of string');
  });

  it('throw error name length is less than 2', () => {
    expect(() => new Character('O')).toThrow('name should be more or equal 2');
  });

  it('throw error name length is more than 10', () => {
    expect(() => new Character('Osdlfjlsdfjdslfjdsljfdslfjs')).toThrow('name should be less or equal 10');
  });

  it('throw error on levelUp if health is less or equal 0', () => {
    const person = new Zombie('Tom');
    person.damage(10000);

    expect(() => person.levelUp()).toThrow('The person is dead. You can not up his level');
  });

  it('leveled up the zombie', () => {
    const person = new Zombie('Tom');
    person.levelUp();

    expect(person.level).toBe(2);
    expect(person.defence).toBe(12);
    expect(person.attack).toBe(48);
  });

  it('throw error on damage with non number points', () => {
    const person = new Zombie('Tom');

    expect(() => person.damage('test')).toThrow('points should be type of number');
  });

  it('throw error on damage with non positive points', () => {
    const person = new Zombie('Tom');

    expect(() => person.damage(-1)).toThrow('Points should be positive');
  });

  it('should change health on damage', () => {
    const person = new Zombie('Tom');
    person.damage(1);

    expect(person.health).toBe(99.1);
  });

  it('should change health to 0 on great damage', () => {
    const person = new Zombie('Tom');
    person.damage(10000);

    expect(person.health).toBe(0);
  });
});
