/**
 *
 * @param {number[]} indices
 * @param {number[]} numbers
 */
const getArrayValuesByIndex = (indices, numbers) =>
  indices.map((index) => numbers[index]);

/**
 *
 * @param {number[]} indices
 * @param {number[]} numbers
 */
const addArrayIndices = (indices, numbers) =>
  getArrayValuesByIndex(indices, numbers).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

/**
 *
 * @param {number[]} indices
 * @param {number[]} numbers
 */
const multiplyArrayIndices = (indices, numbers) =>
  getArrayValuesByIndex(indices, numbers).reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

module.exports = {
  getArrayValuesByIndex,
  addArrayIndices,
  multiplyArrayIndices,
};
