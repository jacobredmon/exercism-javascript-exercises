/**
 * Determines if a given year is a leap year or not.
 *
 * @param {number} year
 * @returns {Boolean}
 */
export const isLeap = (year) => {
  return year % 400 == 0 ? true : (year % 4 == 0) && (year % 100 != 0);
};
