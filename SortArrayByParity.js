/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.
Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]
Output: [0]

*/

var sortArrayByParity = function(nums){
    let evenArray = []
    let oddArray = []
    let finalArray = []
    for(let i=0; i<nums.length;i++){
        if(nums[i] % 2 == 0){
            console.log( evenArray.push(nums[i]) )
        } else {
            console.log( oddArray.push(nums[i]) )
        }
    }
   return finalArray = evenArray.concat(oddArray)
}

console.log(sortArrayByParity([3,1,2,4]))

/*
Solution 2:
let evenArray = nums.filter(x => x % 2 === 0);
let oddArray = nums.filter( x => y % 2 === 1);

return evenArray.concat(oddArray);
*/

/*
Solution 3:
const sortArrayByParity = x => x.filter(e => e % 2 == 0).concat(x.filter(e => e % 2 == 1))
*/