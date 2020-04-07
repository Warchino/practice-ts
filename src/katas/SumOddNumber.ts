// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/typescript

export const rowSumOddNumbers = (num: number): number => {
  function oddGenerator(k: number): number[] {
    const initialValue: number = (k * (k - 1)) + 1;
    const result: number[] = [initialValue];
    for (let i: number = 0; i < k - 1; i++) {
      result.push(result[i] + 2)
    }
    return result;
  }

  return oddGenerator(num)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};
