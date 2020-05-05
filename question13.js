const dict = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  if (s === "") {
    return 0;
  }

  const candidate = dict[s.substring(0, 2)];

  if (candidate) {
    return candidate + romanToInt(s.substring(2));
  }

  return dict[s.substring(0, 1)] + romanToInt(s.substring(1));
};
