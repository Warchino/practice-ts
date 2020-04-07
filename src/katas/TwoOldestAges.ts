// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/typescript

export const TwoOldestAges = (ages: number[]): number[] => {
  const result: number[] = Object.assign([], ages);
  for (let i: number = 0; i < result.length - 1; i++) {
    for (let j: number = i + 1; j < result.length; j++) {
      if (result[i] < result[j]) {
        const minor: number = result[i];
        result[i] = result[j];
        result[j] = minor;
      }
    }
  }
  return [result[1], result[0]];
};