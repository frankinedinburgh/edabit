const perimeter = require("./perimeter");

test("should return the perimeter of either a circle or a square", () => {
  expect(perimeter("s", 1)).toEqual(4);
  expect(perimeter("s", 4)).toEqual(16);
  expect(perimeter("s", 9)).toEqual(36);
  expect(perimeter("s", 13)).toEqual(52);
  expect(perimeter("c", 1)).toEqual(6.28);
  expect(perimeter("c", 4)).toEqual(25.12);
  expect(perimeter("c", 9)).toEqual(56.52);
});