const perimeter = (l, num) =>  num * 4 * (l === "s") + num * 6.28 * (l === "c");

module.exports = perimeter;