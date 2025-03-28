const validName = require("./validName");

/*
 * @link https://edabit.com/challenge/xPBFGvKQfRFEyy4vx
 */

test.each([
  // { name: "H. Wells", expected: true },
  // { name: "H. G. Wells", expected: true },
  // { name: "Herbert G. Wells", expected: true },
  // { name: "Herbert George Wells", expected: true },
  // { name: "Herbert", expected: false },
  // { name: "Herbert W. G. Wells", expected: false },
  // { name: "h. Wells", expected: false },
  // { name: "herbert G. Wells", expected: false },
  // { name: "H Wells", expected: false },
  // { name: "Herb. Wells", expected: false },
  { name: "H. George Wells", expected: false },
  // { name: "Herbert George W.", expected: false },
])(
  "Should return the missing number from an array $name",
  ({ name, expected }) => {
    expect(validName(name)).toEqual(expected);
  }
);
