const COST = 800;
const DISCOUNT = {
  '1': 0,
  '2': 0.05,
  '3': 0.10,
  '4': 0.20,
  '5': 0.25
};

/**
 * Give the biggest discount based on the number of books bought in the same series,
 * for which different discounts apply based on the number bought.
 *
 * @param {array} books
 *
 * @returns {number} cents
 */
export const cost = (books) => {
  var total = 0;
  const subsets = [];

  // creates subsets of series of books
  while(books.length > 0) {
    const subset = [];
    for(var i = 0; i < books.length; i++){
      if(!subset.includes(books[i])){
        subset.push(books[i]);
        books.splice(i, 1);
        i--;
      }
    }
    subsets.push(subset);
  }

  // if sets of 5 and 3, create sets of 4 (which give a bigger discount)
  for(var i = 0; i < subsets.length; i++){
    for(var j = i + 1; j < subsets.length; j++){
      if(subsets[i].length === 5 && subsets[j].length === 3){
        subsets[j].push(subsets[i].pop());
      }
    }
  }

  subsets.forEach(subset => {
    total += subset.length * (COST - (COST * DISCOUNT[subset.length]))
  })

  return total;
};
