const possibleBonus = require("./possibleBonus");

test("possibleBonus(a, b) to return boolean", () => {
  expect(possibleBonus(3, 7)).toBe(true);
  expect(possibleBonus(0, 6)).toBe(true);
  expect(possibleBonus(1, 6)).toBe(true);
  expect(possibleBonus(2, 6)).toBe(true);
  expect(possibleBonus(3, 6)).toBe(true);
  expect(possibleBonus(4, 6)).toBe(true);
  expect(possibleBonus(5, 6)).toBe(true);
  expect(possibleBonus(6, 6)).toBe(false);
  expect(possibleBonus(7, 6)).toBe(false);
  expect(possibleBonus(23, 27)).toBe(true);
  expect(possibleBonus(1, 9)).toBe(false);
  expect(possibleBonus(5, 3)).toBe(false);
});
