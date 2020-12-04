// copy(document.body.innerText.split(/\n\s*\n/))
const input = require("./input");

const {
  validateNumberInRange,
  validateEyeColor,
  validatePassportNumber,
  validateHair,
  validateHeight,
} = require("./helpers");

const splitByNewLine = (document) => document.replace(/(\r\n|\n|\r)/gm, " ");

const formattedInput = input.map(splitByNewLine);

const example = [
  "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm",
  "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\nhcl:#cfa07d byr:1929",
  "hcl:#ae17e1 iyr:2013\neyr:2024\necl:brn pid:760753108 byr:1931\nhgt:179cm",
  "hcl:#cfa07d eyr:2025 pid:166559648\niyr:2011 ecl:brn hgt:59in",
].map(splitByNewLine);

/**
 * @param {string} passportString
 */
const getPassportMap = (passportString) => {
  let map = {};

  const splitBySpace = passportString.split(" ");

  splitBySpace.forEach((element) => {
    const [key, value] = element.split(":");
    map[key] = value;
  });

  return map;
};

const validatePassport = (passport) =>
  "byr" in passport &&
  "iyr" in passport &&
  "eyr" in passport &&
  "hgt" in passport &&
  "hcl" in passport &&
  "ecl" in passport &&
  "pid" in passport;

const generatePassportMaps = (value) => getPassportMap(value);

const getValidPassportCount = (passportValues) =>
  passportValues.map(generatePassportMaps).filter(validatePassport).length;

console.assert(getValidPassportCount(example), "example is equal to 2");

console.log({ part1: getValidPassportCount(formattedInput) });

/**
 *
 * @param {{ pid: string, iyr: string, hgt: string, eyr: string, hcl: string, ecl: string, cid?: string }} passport
 */
const validationMap = (passport) => ({
  pid: () => validatePassportNumber(passport.pid),
  iyr: () =>
    validateNumberInRange({ number: passport.iyr, min: 2010, max: 2020 }),
  hgt: () => validateHeight(passport.hgt),
  eyr: () =>
    validateNumberInRange({ number: passport.eyr, min: 2020, max: 2030 }),
  byr: () =>
    validateNumberInRange({ number: passport.byr, min: 1920, max: 2002 }),
  hcl: () => validateHair(passport.hcl),
  ecl: () => validateEyeColor(passport.ecl),
  cid: () => true,
});

/**
 *
 * @param {{ pid: string, iyr: string, hgt: string, eyr: string, hcl: string, ecl: string, cid?: string }} passport
 */
const validatePassport2 = (passport) => {
  const { pid, iyr, hgt, eyr, byr, hcl, ecl, cid } = validationMap(passport);
  return pid() && iyr() && hgt() && eyr() && byr() && hcl() && ecl() && cid();
};

console.log({
  part2: formattedInput
    .map(generatePassportMaps)
    .map((passport) => validatePassport2(passport))
    .filter(Boolean).length,
});
