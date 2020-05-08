/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let [currentPrefix = ""] = strs;

  for (let i = 1; i < strs.length; i += 1) {
    if (currentPrefix.length === 0) {
      break;
    }

    const str = strs[i];

    if (str.startsWith(currentPrefix)) {
      continue;
    }

    currentPrefix = currentPrefix.substring(0, currentPrefix.length - 1);
    i -= 1;
  }

  return currentPrefix;
};
