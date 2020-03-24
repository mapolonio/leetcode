/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  const rows = [...new Array(numRows)].map(n => "");
  const pattern = getRowPattern(numRows);

  for (let i = 0; i < s.length; i += 1) {
    const rowNumber = pattern[i % pattern.length];
    rows[rowNumber] += s[i];
  }

  return joinRows(rows);
};

const joinRows = rows => rows.reduce((acc, row) => acc + row, "");

const getRowPattern = numRows => {
  const pattern = [];

  for (let i = 0; i < numRows; i += 1) {
    pattern.push(i);
  }

  for (let i = numRows - 2; i > 0; i -= 1) {
    pattern.push(i);
  }

  return pattern;
};
