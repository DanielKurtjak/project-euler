import { getDivisors } from "../helpers.js";

describe("Test divisors of a number", () => {
  test.each([
    [2, 2],
    [3, 3],
    [5, 5],
    [13, 13],
    [23, 23],
    [31, 31]
  ])("For prime %d should return [1, %d]", prime => {
    expect(getDivisors(prime)).toEqual([1, prime]);
  });

  test("should return 1 for 1", () => {
    expect(getDivisors(1)).toEqual([1]);
  });

  test("for 100 should return [1,2,4,5,10,20,25,50,100]", () => {
    const expected = [1, 2, 4, 5, 10, 20, 25, 50, 100];
    expect(getDivisors(100).sort((a, b) => a - b)).toEqual(expected);
  });

  test("for 30 should return [1,2,3,5,6,10,15,30]", () => {
    const expected = [1, 2, 3, 5, 6, 10, 15, 30];
    expect(getDivisors(30).sort((a, b) => a - b)).toEqual(expected);
  });
});
