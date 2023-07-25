/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
  var actSum = 0
  var maxVal = unorderedNums[0]
  for (let i = 0; i < unorderedNums.length; i++) {
    if (maxVal < unorderedNums[i]) {
      maxVal = unorderedNums[i]
    }
    actSum += unorderedNums[i]
  }
  var expSum = maxVal * (maxVal + 1) / 2
  result = expSum - actSum
  return result < 1 ? null : result
}

console.log(missingValue(nums1));
console.log(missingValue(nums2));



/*
  Array: Mode

  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const two_nums1 = [];
const two_expected1 = [];

const two_nums2 = [1];
const two_expected2 = [1];

const two_nums3 = [5, 1, 4];
const two_expected3 = [];

const two_nums4 = [5, 1, 4, 1];
const two_expected4 = [1];

const two_nums5 = [5, 1, 4, 1, 5];
const two_expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) { }


