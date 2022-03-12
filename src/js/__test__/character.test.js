import Character from '../character';

test('Character name A', () => {
  expect(() => {
    new Character('A', 'Bowman');
  }).toThrow();
});

test('Character name Aaaaaaaaaaaa', () => {
  expect(() => {
    new Character('Aaaaaaaaaaaa', 'Bowman');
  }).toThrow();
});

test('Unvalid type', () => {
  expect(() => {
    new Character('Killer', 'Pixie');
  }).toThrow();
});

test('successful', () => {
  const hero = new Character('Hero', 'Bowman');
  expect(hero.name).toBe('Hero');
});
