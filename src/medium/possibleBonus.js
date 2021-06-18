// @link https://edabit.com/challenge/NHfYRHg2tDtcZyykB
const possibleBonus = (a, b) => (a >= b || a + 6 < b ? false : true);

module.exports = possibleBonus;
