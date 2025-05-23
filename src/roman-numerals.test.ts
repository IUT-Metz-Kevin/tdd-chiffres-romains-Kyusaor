// Write your test here
/*
    liste de cas:
      - Renvoie un chiffre "simple" (un caractère)
      - Renvoie un chiffre avec soustraction
      - Renvoie plusieurs chiffres
 */
import { RomanNumeral } from './modeles/RomanNumeral.class.js';

test.each([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
  ['IV', 4],
  ['IX', 9],
  ['XL', 40],
  ['XC', 90],
])('%s should give %s', (input: string, expected: number) => {
  console.log(input, expected);
  const rom = new RomanNumeral();
  expect(rom.of(input)).toBe(expected);
});
