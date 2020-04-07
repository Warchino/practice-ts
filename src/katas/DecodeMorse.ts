const MORSE_CODE: { [key: string]: string } = {
  '....': 'H'
};


export function decodeMorse(morseCode: string): string {
  return morseCode.split('   ').map(word => {
    const letterArray: string[] = word.split(' ');
    return letterArray.map(letter => MORSE_CODE[letter]).join('');
  }).join(' ').trim();
}