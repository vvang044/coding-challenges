/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

 Example 1:
 Input nums = [3,2,3]
 Output: 3

 Example 2:
 Input nums = [2,2,1,1,1,2,2]
 Ouput: 2

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {

    let obj = {}
    for ( let num of nums){
        obj[num] = obj[num] + 1 || 1;
    }

   // console.log(obj) //{ '2': 1, '3': 2 }
   
   for ( let key in obj ){
       if(obj[key] > Math.floor(nums.length / 2))
       return key
   }
};


/*
Alternative solution
Since the question mentions that majority element does exist in the array,
We can sort the arrya nd the middle element is the majority element.
Since the number has to be more than n/2 times, it has to be in the center.
A solution would look something like this.
First we sort the array and next we find the middle element.
if the length is even we find the center by diving the length by 2 else we subtract 1
from the lenght and then find the center

var majorityElement = function ( nums ){
    nums.sort( (a,b) => a - b);

    let x = nums.length;

    if ( x % 2 === 0){
        return nums[ x / 2]
    } else {
        return nums[ (x-1) / 2]
    }
}


*/



console.log(majorityElement([3,2,3]))