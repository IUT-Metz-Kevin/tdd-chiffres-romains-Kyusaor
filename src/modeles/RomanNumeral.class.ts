export class RomanNumeral {
  static Alphabet = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  of(value: string): number {
    const keys = Object.keys(RomanNumeral.Alphabet);

    if (keys.indexOf(value[0]) < keys.indexOf(value[1]))
      return this.ofChar(value[1]) - this.ofChar(value[0]);
    else {
      const initialization = 0;
      return Array.from(value).reduce(
        (accu: any, currentValue: string) => accu + this.ofChar(currentValue),
        initialization,
      );
    }
  }

  private ofChar(value: string) {
    return RomanNumeral.Alphabet[value];
  }
}
