import {TwoOldestAges} from '../katas/TwoOldestAges';

describe('Examples', function () {
  it('twoOldestAges([1,5,87,45,8,8]) should return [45,87]', function () {
    expect(TwoOldestAges([1, 5, 87, 45, 8, 8])).toStrictEqual([45, 87]);
  });
});