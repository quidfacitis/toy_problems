// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {
  let k = 1;
  let currentElement = nums[0];

  nums.forEach((num, i) => {
    if (num !== currentElement) {
      nums[k] = num
      k += 1
      currentElement = num
    }

    if (i !== 0 && k - 1 !== i) {
      nums[i] = '_'
    }
  });

  return k;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([1,2])) // 2


