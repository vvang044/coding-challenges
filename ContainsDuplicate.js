/*
Given an integer array nums, return true if any value appears
 at least twice in the array, and return false if every element is distinct.

 Example 1
 Input nums = [1,2,3,1]
 Output: true

 Example 2
 Input nums = [1,2,3,4]
 Output: false

*/

var containsDuplicate = function(nums){

    let obj = {}

    for(let num of nums){
        // obj[num] = obj[num] + 1 || 1;
        obj[num] = (obj[num] || 0 ) + 1;
    
    }

    // console.log(obj) { '2': 1, '3': 2 }
    
    for(let value in obj){
        if(obj[value] >=2 ) return true;    
    }

    return false;
    
}

console.log(containsDuplicate([3,2,3]))
console.log(containsDuplicate([1,2,3]))
console.log(containsDuplicate([1,2,3,1,2,3]))