/**
 * Determines number of steps to reach 1 using the Collatz Conjecture
 *
 * @param {number} input
 *
 * @return {number} count of steps
 */
export const steps = (input) => {
  var count = 0;

  if(input < 1) throw new Error('Only positive numbers are allowed');

  while(input != 1){
    input & 1 ? input = input * 3 + 1 : input = input / 2; // uses bitwise & operator to determine if input is odd
    count++;
  }
  return count;
};
