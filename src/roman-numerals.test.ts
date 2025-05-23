// Write your test here
/*
    liste de cas:
      - Renvoie un chiffre "simple" (un caractère)
      - Renvoie un chiffre avec soustraction
      - Renvoie plusieurs chiffres
 */
import { RomanNumeral } from './modeles/RomanNumeral.class.js';

it('Should return 1', () => {
  const rom = new RomanNumeral();
  expect(rom.of("I")).toBe(1);
});

it('Should return 5', () => {
  const rom = new RomanNumeral();
  expect(rom.of("V")).toBe(5);
});

it('Should return 10', () => {
  const rom = new RomanNumeral();
  expect(rom.of("X")).toBe(10);
});

it('Should return 50', () => {
  const rom = new RomanNumeral();
  expect(rom.of("L")).toBe(50);
});

it('Should return 100', () => {
  const rom = new RomanNumeral();
  expect(rom.of("C")).toBe(100);
});

it('Should return 500', () => {
  const rom = new RomanNumeral();
  expect(rom.of("D")).toBe(500);
});

it('Should return 1000', () => {
  const rom = new RomanNumeral();
  expect(rom.of("M")).toBe(1000);
});