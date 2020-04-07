import {rowSumOddNumbers} from '../katas/SumOddNumber';

describe('basic tests', function () {
  it('Testing for 1', () => expect(rowSumOddNumbers(1)).toBe(1));
  it('Testing for 2', () => expect(rowSumOddNumbers(2)).toBe(8));
  it('Testing for 93', () => expect(rowSumOddNumbers(93)).toBe(804357));
  it('Testing for 101', () => expect(rowSumOddNumbers(101)).toBe(1030301));
});