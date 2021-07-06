// Gvien an array of intergers "nums" and an integer "target" returns indices of two numbers
//such that they add up to "target"
// You may assume that each input would have exactly one solution and you may not use the
// same element twice
// you can return the answer in any order

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for ( let i=0; i<nums.length; i++){
        for  (let j=i+1; j<nums.length; j++){
              if (nums[i] + nums[j] === target){
                  return [i, j]
              }
          }
    }
};

const nums = [2,7,11,15];
const target = 18;
console.log(twoSum(nums,target));