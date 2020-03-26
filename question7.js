/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const stringNumber = `${x}`;
  let newNumber = "";
  let isNegative = false;

  for (let i = stringNumber.length - 1; i >= 0; i -= 1) {
    const char = stringNumber[i];

    if (char === "-") {
      isNegative = true;
      continue;
    }

    newNumber += char;
  }

  newNumber = parseInt(newNumber, 10);

  if (isNegative) {
    newNumber *= -1;
  }

  return inRange(newNumber) ? newNumber : 0;
};

const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = Math.pow(2, 31) * -1;

const inRange = n => {
  return MIN_INT <= n && n <= MAX_INT;
};
