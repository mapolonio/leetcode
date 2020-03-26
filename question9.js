/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  const digits = getDigits(x);

  return isPalindromeArray(digits);
};

function getNumDigits(n) {
  let numDigits = 0;

  for (let power = 1; n / power >= 1; power *= 10) {
    numDigits += 1;
  }

  return numDigits;
}

function getDigits(n) {
  const numDigits = getNumDigits(n);
  const digits = [];

  for (let i = numDigits, current = n; i > 0; i -= 1) {
    const power = Math.pow(10, i - 1);
    const digit = Math.floor(current / power);

    current = current - digit * power;

    digits.push(digit);
  }

  return digits;
}

function isPalindromeArray(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i += 1, j -= 1) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }

  return true;
}
