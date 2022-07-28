export const dnaToRna = {
  C: "G",
  G: "C",
  A: "U",
  T: "A"
}

/**
 * Given a DNA strand, return its RNA complement (per RNA transcription).
 *
 * @param {string} dna
 *
 * @returns {string} rna
 */
export const toRna = (dna) => {
  const RNA = /[CGAT]/g;
  return dna.replace(RNA, i => dnaToRna[i]);
};
