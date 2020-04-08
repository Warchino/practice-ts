import {solution} from '../katas/RomanNumberDecoder';

describe('solution', function () {
  it('tests', () => {
    expect(solution('XXI')).toBe(21);
    expect(solution('I')).toBe(1);
    expect(solution('IV')).toBe(4);
    expect(solution('MMVIII')).toBe(2008);
    expect(solution('MDCLXVI')).toBe(1666);
  });
});