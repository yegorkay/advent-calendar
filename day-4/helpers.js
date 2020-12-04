/**
 *
 * @param {{ number: string, min: number, max: number }} args
 */
const validateNumberInRange = ({ number, min, max }) =>
  parseInt(number) >= min && parseInt(number) <= max;

/**
 *
 * @param {string} color
 */
const validateEyeColor = (color) =>
  ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(color);

/**
 *
 * @param {string} passportNumber
 */
const validatePassportNumber = (passportNumber = "") => {
  // console.log({ passportNumber });
  if (passportNumber.length !== 9) return false;
  return !!Number(passportNumber);
};
// const validatePassportNumber = (passportNumber) => {
//   const regex = new RegExp(/^\d{9}$/);
//   return regex.test(passportNumber);
// };

/**
 *
 * @param {string} hairColor
 */
const validateHair = (hairColor) => {
  return !!hairColor.match(/#[0-9a-fA-F]{6}/);
};

/**
 *
 * @param {string} heightInfo
 */
const validateHeight = (heightInfo) => {
  if (!heightInfo) return false;

  const validUnits = ["cm", "in"];
  const unit = heightInfo.substr(heightInfo.length - 2);
  const heightNumber = parseInt(heightInfo.match(/\d+/)[0]);

  if (!unit || !validUnits.includes(unit)) return false;

  if (unit === "cm") {
    return validateNumberInRange({ number: heightNumber, min: 150, max: 193 });
  }

  return validateNumberInRange({ number: heightNumber, min: 59, max: 76 });
};

module.exports = {
  validateNumberInRange,
  validateEyeColor,
  validatePassportNumber,
  validateHair,
  validateHeight,
};
