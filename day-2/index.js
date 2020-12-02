const parseTextInput = require("../parseTextInput");

const testData = [
  { i: 1, j: 3, letter: "a", password: "abcde" },
  { i: 1, j: 3, letter: "b", password: "cdefg" },
  { i: 2, j: 9, letter: "c", password: "ccccccccc" },
];

const parse = () =>
  parseTextInput("day-2/input.txt").map((line) => {
    const {
      groups,
    } = /(?<i>\d+)-(?<j>\d+) (?<letter>\w): (?<password>\w+)/g.exec(line);
    return {
      ...groups,
      i: parseInt(groups.i),
      j: parseInt(groups.j),
    };
  });

const realInput = parse();

const part1 = (input) =>
  input.reduce((valid, { i, j, letter, password }) => {
    const actual = password.split(letter).length - 1;
    return actual >= i && actual <= j ? valid + 1 : valid;
  }, 0);

const part2 = (input) =>
  input.reduce(
    (valid, { i, j, letter, password }) =>
      (password[i - 1] === letter) !== (password[j - 1] === letter)
        ? valid + 1
        : valid,
    0
  );

console.assert(part1(testData) === 2, "2 valid passwords");

console.assert(part2(testData) === 1, "1 valid passwords");

console.log(part1(realInput), part2(realInput));
