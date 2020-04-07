// https://www.codewars.com/kata/55c45be3b2079eccff00010f/typescript

export function order(words: string): string {
  const wordsArray: string[] = words.split(' ');
  const result: string[] = Object.assign([], wordsArray);

  wordsArray.forEach(word => {
    const regexPosition: RegExp = /[1-9]/g;
    const match: RegExpMatchArray | null = regexPosition[Symbol.match](word);
    if (match) {
      result.splice(parseInt(match[0]) - 1, 1, word);
    }
  });

  return result.join(' ');
}