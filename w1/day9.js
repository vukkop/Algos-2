/*
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9,9];
const two_expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if(nums.length <=2){
        return -1;
    }
    var sumOfNums = 0;
    var currentSum = 0;
    for (var i = 0; i < nums.length; i++) {
        sumOfNums += nums[i];
    }
    for (var j = 0; j < nums.length; j++) {
        if (currentSum == (sumOfNums - nums[j]) / 2) {
            return j;
        }
        currentSum += nums[j];
    }
    return -1;

}
console.log(balanceIndex(two_nums1))
console.log(balanceIndex(two_nums2))
