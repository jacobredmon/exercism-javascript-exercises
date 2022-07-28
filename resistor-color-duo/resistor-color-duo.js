export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

/**
 * Look up numerical value of associated with a
 * particular color band of a resistor
 *
 * @param {string[]} color
 *
 * @returns {number} numerical value of color
 */
export const decodedValue = (color) => { return Number(COLORS.indexOf(color[0]) + "" + COLORS.indexOf(color[1])); };
