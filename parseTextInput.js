const fs = require("fs");

/**
 *
 * @param {string} filePath
 */
const parseTextInput = (filePath) =>
  fs.readFileSync(filePath).toString().split("\n");

module.exports = parseTextInput;
