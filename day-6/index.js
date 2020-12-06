const realInput = require("./input");

/**
 *
 * @param {string[]} input
 */
const getGroupAnswerSum = (input) =>
  input
    .map((answer) => {
      const trimmed = answer.replace(/(\r\n|\n|\r)/gm, "");
      const uniqueAnswers = [...new Set(trimmed.split(""))];

      return uniqueAnswers.length;
    })
    .reduce((curr, prev) => curr + prev);

/**
 * Browser specific because I wanted replaceAll to work...
 */
const browserSpecificSolution = () => {
  const data = document
    .getElementsByTagName("pre")[0]
    .innerText.trim()
    .split("\n\n");

  let result = 0;

  for (let i = 0; i < data.length; i++) {
    let group = data[i].replaceAll("\n", "").split("").sort();

    if (data[i].split("\n").length == 1) {
      result += data[i].length;
    } else {
      let repeatCharacterTest = new RegExp(
        "([a-z])\\1{" + (data[i].split("\n").length - 1) + ",}",
        "g"
      );

      let testResult = group
        .toString()
        .replaceAll(",", "")
        .match(repeatCharacterTest);

      if (testResult != null) result += testResult.length;
    }
  }
  return result;
};
