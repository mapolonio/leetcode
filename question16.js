/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  const sorted = nums.sort((a, b) => a - b);
  let result;
  let currentDist;

  for (let i = 0; i < sorted.length - 2; i += 1) {
    const a = sorted[i];
    const twoSumTarget = target - a;
    const closestTwoSum = twoSumClosest(sorted, twoSumTarget, i + 1);
    const candidate = a + closestTwoSum;
    const dist = getDist(target, candidate);

    if (result === undefined || dist < currentDist) {
      result = candidate;
      currentDist = dist;
    }
  }

  return result;
};

const twoSumClosest = (nums, target, init) => {
  let result;
  let currentDist;

  for (let i = init; i < nums.length - 1; i += 1) {
    const b = nums[i];
    const c = findClosest(nums, target - b, i + 1);

    const candidate = b + c;
    const dist = getDist(target, candidate);

    if (currentDist !== undefined && dist > currentDist) {
      break;
    }

    if (result === undefined || dist < currentDist) {
      currentDist = dist;
      result = candidate;
    }
  }

  return result;
};

const findClosest = (nums, target, init) => {
  let result;
  let currentDist;

  for (let i = init; i < nums.length; i += 1) {
    const candidate = nums[i];
    const dist = getDist(target, candidate);

    if (currentDist !== undefined && dist > currentDist) {
      break;
    }

    if (currentDist === undefined || dist < currentDist) {
      currentDist = dist;
      result = candidate;
    }
  }

  return result;
};

const getDist = (target, candidate) => {
  return Math.abs(target - candidate);
};
