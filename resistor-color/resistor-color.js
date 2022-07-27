export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

/**
 * Look up numerical value of associated with a
 * particular color band of a resistor
 *
 * @param {string} color
 *
 * @returns {number} numerical value of color
 */
export function colorCode(color){ return COLORS.indexOf(color); };
