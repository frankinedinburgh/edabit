function missingNum(arr) {
  return 55 - arr.reduce((a, v) => a + v, 0);
}

module.exports = missingNum;
