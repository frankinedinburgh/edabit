const missingNum = require("./missingNum");
test.each([
  {a: [1, 2, 3, 4, 6, 7, 8, 9, 10], expected: 5},
  {a: [7, 2, 3, 6, 5, 9, 1, 4, 8], expected: 10},
  {a: [7, 2, 3, 9, 4, 5, 6, 8, 10], expected: 1},
  {a: [10, 5, 1, 2, 4, 6, 8, 3, 9], expected: 7},
  {a: [1, 7, 2, 4, 8, 10, 5, 6, 9], expected: 3},
])("Should return the missing number from an array", ({a, expected}) => {
  expect(missingNum(a)).toEqual(expected);
});