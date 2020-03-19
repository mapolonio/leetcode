/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let firstArray = nums1;
  let secondArray = nums2;
  const leftHalfLength = getLeftHalfLength(firstArray, secondArray);

  if (nums1.length === 0) {
    if (nums2.length === 1) {
      return nums2[0];
    }

    if (nums2.length === 2) {
      return mean(nums2[0], nums2[1]);
    }

    firstArray = nums2.slice(0, leftHalfLength);
    secondArray = nums2.slice(leftHalfLength);
  }

  if (nums2.length === 0) {
    if (nums1.length === 1) {
      return nums1[0];
    }

    if (nums1.length === 2) {
      return mean(nums1[0], nums1[1]);
    }

    firstArray = nums1.slice(0, leftHalfLength);
    secondArray = nums1.slice(leftHalfLength);
  }

  let { start, end } = getPosibleContributions(
    firstArray,
    secondArray,
    leftHalfLength
  );
  let median;

  while (median === undefined) {
    const contributionSize = pickMiddle(start, end);
    const contribB = leftHalfLength - contributionSize;
    const indexX = contributionSize - 1;
    const indexY = contribB - 1;
    const { candidate, result } = getMedianCandidate(
      firstArray,
      secondArray,
      indexX,
      indexY
    );

    if (result === 0) {
      median = candidate;
    }

    if (result < 0) {
      end = contributionSize - 1;
    } else {
      start = contributionSize;
    }
  }

  return median;
};

function isEven(n) {
  return n % 2 === 0;
}

function mean(a, b) {
  return (a + b) / 2;
}

function getMedianCandidate(nums1, nums2, indexX, indexY) {
  const x = nums1[indexX];
  const y = nums2[indexY];
  let prev = getMax(nums2[indexY - 1], nums1[indexX - 1]);
  let next = getMin(nums1[indexX + 1], nums2[indexY + 1]);
  let candidate;
  let result;

  if (x === undefined) {
    candidate = y;
    next = nums1[0];
    result = 1;
  } else if (y === undefined) {
    candidate = x;
    next = nums2[0];
    result = -1;
  } else if (x > y) {
    candidate = x;
    prev = getMax(y, nums1[indexX - 1]);
    result = -1;
  } else {
    candidate = y;
    prev = getMax(x, nums2[indexY - 1]);
    result = 1;
  }

  if (next === undefined || candidate <= next) {
    result = 0;
  }

  if (isEven(nums1.length + nums2.length)) {
    candidate = mean(candidate, prev);
  }

  return {
    candidate,
    result
  };
}

function getMin(a, b) {
  if (a === undefined && b === undefined) {
    return undefined;
  }

  if (a === undefined) {
    return b;
  }

  if (b === undefined) {
    return a;
  }

  return Math.min(a, b);
}

function getMax(a, b) {
  if (a === undefined && b === undefined) {
    return undefined;
  }

  if (a === undefined) {
    return b;
  }

  if (b === undefined) {
    return a;
  }

  return Math.max(a, b);
}

function getLeftHalfLength(arrayA, arrayB) {
  const totalLength = arrayA.length + arrayB.length;

  if (isEven(totalLength)) {
    return totalLength / 2 + 1;
  }

  return Math.ceil(totalLength / 2);
}

function getPosibleContributions(nums1, nums2, totalLength) {
  let start;
  let end;

  for (let i = 0; i <= totalLength; i += 1) {
    const contributionsA = i;
    const contributionsB = totalLength - i;

    if (contributionsA > nums1.length || contributionsB > nums2.length) {
      continue;
    }

    if (start === undefined) {
      start = i;
      end = i;
    }

    if (i > end) {
      end = i;
    }
  }

  return { start, end };
}

function pickMiddle(numA, numB) {
  return Math.ceil((numA + numB) / 2);
}