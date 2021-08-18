/*
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.
Example 1
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

var sortedSquares = function(nums){
    let finalArray = []

    for( let i=0; i < nums.length; i++){
          
        finalArray.push(nums[i] * nums[i])
    }

    return finalArray.sort((a,b) => a - b);
    // a - b ascending order
    // b - a descending order

}

console.log(sortedSquares( [1,2,3,4]) ) //[ 1, 4, 9, 16 ]
// console.log(sortedSquares( [-4,-1,0,3,10] )) //[ 0, 1, 9, 16, 100 ]