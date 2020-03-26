/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const [, number] = pattern.exec(str) || [, "0"];

  return truncateNumber(parseInt(number, 10));
};

var pattern = /^ *([-\+]{0,1}[0-9]+)/;
const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = Math.pow(2, 31) * -1;

const truncateNumber = n => {
  if (n < INT_MIN) {
    return INT_MIN;
  }

  if (n > INT_MAX) {
    return INT_MAX;
  }

  return n;
};
