// https://www.codewars.com/kata/51b6249c4612257ac0000005

const ROMAN_NUMBER: { [key: string]: number; } = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

export function solution(roman: string): number {
  const numbers: string[] = roman.split('').reverse();
  let result: number = 0;
  for (let i: number = 0; i < numbers.length; i++) {
    const currentValue: number = ROMAN_NUMBER[numbers[i]];
    const nextValue: number = ROMAN_NUMBER[numbers[i + 1]];
    result += currentValue;
    if (currentValue > nextValue) {
      result -= nextValue;
      i++;
    }
  }
  return result;
}
