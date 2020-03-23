/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let longestPalindrome = "";

  for (let i = 0; i < s.length; i += 1) {
    const candidate = s.substring(i, s.length);

    if (candidate.length < longestPalindrome.length) {
      break;
    }

    const palindrome = getLongestPalindrome(candidate);

    if (palindrome.length > longestPalindrome.length) {
      longestPalindrome = palindrome;
    }
  }

  return longestPalindrome;
};

function getLongestPalindrome(string) {
  for (let i = string.length; i >= 0; i -= 1) {
    const substr = string.substring(0, i);

    if (isPalindrome(substr)) {
      return substr;
    }
  }

  return "";
}

function isPalindrome(string) {
  if (string.length === 0 || string.length === 1) {
    return true;
  }

  for (let i = 0, j = string.length - 1; i <= j; i += 1, j -= 1) {
    if (string[i] !== string[j]) {
      return false;
    }
  }

  return true;
}
