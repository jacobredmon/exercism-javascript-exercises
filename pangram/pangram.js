export const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

/**
 * Determine if a sentence is a pangram.
 *
 * @param {string} sentence
 *
 * @returns {Boolean}
 */
export const isPangram = (sentence) => {
  const set = new Set(sentence.replace(/[^a-z]/gi, "").toLowerCase());
  return [...set].sort().join("") === ALPHABET;
};
