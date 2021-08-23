/*
Given an integer array nums, move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example:
Input: nums= [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let index = 0;
    
    for(let i=0; i<nums.length; i++){
        let num = nums[i]
        
        if(num !==0){
            nums[index] = num
            index++
        }
        
    }
    
    for(let i=index; i<nums.length; i++){
        nums[i] = 0
    }
};

/*
Explanation
Keep a variable of index to keep a track where we are set at zero
start placing at 0th index
traverse the array
now check if the number we are at not equal to zero
place this number at the index we are at
nums[index] = nums[i] whatever we are number at
once we are done
we fill the rest by zeros nums[i] = 0
*/