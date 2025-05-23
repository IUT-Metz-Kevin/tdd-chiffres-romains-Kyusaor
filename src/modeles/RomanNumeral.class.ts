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

  of(numberString: string): number {
    const baseNumberKeys = Object.keys(RomanNumeral.Alphabet);
    let individualNumbers: string[] = [];

    while (numberString.length > 0) {
      const substractionCheck =
        baseNumberKeys.indexOf(numberString[0]) <
        baseNumberKeys.indexOf(numberString[1]);

      if (substractionCheck) {
        individualNumbers.push([numberString[0], numberString[1]].join(''));
        numberString = numberString.slice(2);
      } else {
        individualNumbers.push(numberString[0]);
        numberString = numberString.slice(1);
      }
    }

    const initialization = 0;
    return individualNumbers.reduce(
      (accu: number, currentValue: string) => accu + this.ofChar(currentValue),
      initialization,
    );
  }

  private ofChar(numberString: string) {
    const baseNumberKeys = Object.keys(RomanNumeral.Alphabet);

    if (
      baseNumberKeys.indexOf(numberString[0]) <
      baseNumberKeys.indexOf(numberString[1])
    )
      return this.ofChar(numberString[1]) - this.ofChar(numberString[0]);
    else return RomanNumeral.Alphabet[numberString];
  }
}
