const { addArrayIndices, multiplyArrayIndices } = require("./helpers");
const { twoSum, threeSum } = require("./nSum");

const parseTextInputAsNumbers = require("../parseTextInputAsNumbers");

const testInput = [1721, 979, 366, 299, 675, 1456];
const realInput = parseTextInputAsNumbers("day-1/input.txt");

console.assert(
  addArrayIndices(twoSum(testInput), testInput) === 2020,
  "example test case - two entries found equal 2020"
);

console.assert(
  addArrayIndices(twoSum(realInput), realInput) === 2020,
  "real test case - two entries found equal 2020"
);

console.assert(
  addArrayIndices(threeSum(testInput), testInput) === 2020,
  "example test case - three entries found equal 2020"
);

console.assert(
  addArrayIndices(threeSum(realInput), realInput) === 2020,
  "real test case - three entries found equal 2020"
);

console.assert(
  multiplyArrayIndices(twoSum(testInput), testInput) === 514579,
  "product of two sum example is 514579"
);
