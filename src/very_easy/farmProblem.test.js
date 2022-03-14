const farmProblem = require("./farmProblem");
test("should amount to this number of legs", () => {
  expect(farmProblem(5, 2, 8)).toEqual(50)
  expect(farmProblem(3, 4, 7)).toEqual(50)
  expect(farmProblem(1, 2, 3)).toEqual(22)
  expect(farmProblem(3, 5, 2)).toEqual(34)
})
