import Magician from '../magician';

test('test magician 100', () => {
  const merlin = new Magician('Merlin', null, 3);
  merlin.attack = 100;
  merlin.stoned = true;

  const result = 72;

  expect(merlin.attack).toBe(result);
});

test('test magician 100 without stoned', () => {
  const merlin = new Magician('Merlin', null, 3);
  merlin.attack = 100;
  merlin.stoned = false;

  const result = 80;

  expect(merlin.attack).toBe(result);
});

test('test magician 200', () => {
  const merlin = new Magician('Merlin', null, 3);
  merlin.attack = 200;
  merlin.stoned = true;

  const result = 152;

  expect(merlin.attack).toBe(result);
});

test('.stoned = true', () => {
  const merlin = new Magician('Merlin', null, 3);
  merlin.stoned = true;
  expect(merlin.stoned).toBe(true);
});
