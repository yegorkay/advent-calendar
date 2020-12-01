const fs = require("fs");

/**
 *
 * @param {string} filePath
 */
const parseTextInputAsNumbers = (filePath) =>
  fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((textValue) => parseInt(textValue));

module.exports = parseTextInputAsNumbers;
