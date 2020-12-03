// For some reason my parseTextInput function keeps giving me the wrong input...
// Not sure how I got the first two answers to work, but alright.
// run this snippet in the browser
// copy(document.body.innerText.split("\n"))
const input = require("./input");
const coordinates = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

/**
 *
 * @param {string[]} trees
 */
const getTreeCount = (trees) =>
  trees.reduce(
    (previous, current, index) =>
      previous + (current[(3 * index) % current.length] === "#" ? 1 : 0),
    0
  );

/**
 *
 * @param {number[][]} treeCoordinates
 * @param {string[]} trees
 */
const getTreeProduct = (treeCoordinates, trees) =>
  treeCoordinates.reduce(
    (previousCoordinate, currentCoordinate) =>
      previousCoordinate *
      trees.reduce(
        (previousTree, currentTree, treeIndex) =>
          previousTree +
          (currentTree[
            ((currentCoordinate[0] * treeIndex) / currentCoordinate[1]) %
              currentTree.length
          ] === "#" && treeIndex % currentCoordinate[1] === 0
            ? 1
            : 0),
        0
      ),
    1
  );

console.log(getTreeCount(input));
console.log(getTreeProduct(coordinates, input));
