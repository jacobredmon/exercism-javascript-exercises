export const GIGASECOND = 10**12;

/**
 * Determine the moment that would be after a gigasecond has passed
 *
 * @param {date} date
 *
 * @returns {date} calculated date
 */
export const gigasecond = (date) => { return new Date(+date + GIGASECOND); };
