/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  let result = "";
  const composition = decompose(num);

  for (
    let i = 0, currentPower = 1000;
    i < composition.length;
    i += 1, currentPower /= 10
  ) {
    const num = composition[i];

    if (num === 0) {
      continue;
    }

    result += getRomanDigit(num, romanPowers[currentPower]);
  }

  return result;
};

const decompose = (num) => {
  let currentNumber = num;
  const result = [];

  for (let power of [1000, 100, 10, 1]) {
    const quantity = Math.floor(currentNumber / power);
    result.push(quantity);

    currentNumber -= quantity * power;
  }

  return result;
};

const romanPowers = {
  1000: { one: "M" },
  100: { one: "C", five: "D", ten: "M" },
  10: { one: "X", five: "L", ten: "C" },
  1: { one: "I", five: "V", ten: "X" },
};

const getRomanDigit = (num, { one, five, ten }) => {
  if (num < 4) {
    return new Array(num).fill(one).join("");
  }

  if (num === 4) {
    return `${one}${five}`;
  }

  if (num === 5) {
    return five;
  }

  if (num === 9) {
    return `${one}${ten}`;
  }

  return `${five}${getRomanDigit(num - 5, { one, five, ten })}`;
};
