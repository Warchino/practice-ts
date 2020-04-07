// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/typescript

export function reverseWords(str: string): string {
  const arrayOfWords: string[] = str.split(' ');
  const result: string[] = [];
  arrayOfWords.forEach(word => {
      let reverseWord = '';
      for (let i: number = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
      }
      result.push(reverseWord);
    }
  )
  return result.join(' ');
}