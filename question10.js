const isMatch = function (s, p) {
  const [char] = s;
  const [patternChar, modifier] = p;

  if (count > 10) {
    return false;
  }

  if (p === "") {
    return s === "";
  }

  if (modifier === "*") {
    if ((char && patternChar === ".") || char === patternChar) {
      return (
        recursiveMatch(s.substring(1), p) || recursiveMatch(s, p.substring(2))
      );
    }

    return recursiveMatch(s, p.substring(2));
  }

  if ((char && patternChar === ".") || char === patternChar) {
    return recursiveMatch(s.substring(1), p.substring(1));
  }

  return false;
};
