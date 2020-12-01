/**
 *
 * @param {number[]} arr
 * @param {number} target
 */
const twoSum = (nums, target = 2020) => {
  numsIndexes = {};

  for (let i = 0; i < nums.length; i += 1) {
    let currentDifference = target - nums[i];

    if (
      numsIndexes[currentDifference] !== undefined &&
      numsIndexes[currentDifference] !== i
    ) {
      return [i, numsIndexes[currentDifference]];
    } else {
      numsIndexes[nums[i]] = i;
    }
  }
};

/**
 *
 * @param {number[]} arr
 * @param {number} sum
 */
const threeSum = (arr, sum = 2020) => {
  for (let i = 0; i < arr.length; i++) {
    const indices = twoSum(arr, sum - arr[i]);
    if (indices && indices !== -1 && !indices.includes(i)) {
      return [i, ...indices];
    }
  }
  return -1;
};

module.exports = { twoSum, threeSum };
