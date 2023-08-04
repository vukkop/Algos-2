const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const pivot = nums[0];
  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      leftArr.push(nums[i]);
    } else {
      rightArr.push(nums[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(nums1));
console.log(quickSort(nums2));
console.log(quickSort(nums3));
console.log(quickSort(nums4));

// original : [11, 8, 14, 3, 6, 2, 7]
// new.    :  [ 3, 6, 2, 7, 11, 8, 14] (7 as the pivot)

// return the pivot index :3

/*
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are all possible solutions because numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/

// function partition(nums = [], low = 0, high = nums.length - 1) {
//   let pivot = nums[low];
//   let j = 0;

//   for (let i = low; i < high; i++) {
//     if (nums[i] < pivot) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       j++;
//     }
//   }
// }

// function quickSort(nums, low, high) {
//   if (low < high) {
//     const part = partition(nums, low, high);

//     quickSort(nums, low, part);
//     quickSort(nums, part + 1, high);
//   }
// }

// console.log(partition(nums1));
