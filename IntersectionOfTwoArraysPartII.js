/*
Given two integer arrays nums1 and nums2, return an array 
of their intersection. Each element in the result must
 appear as many times as it shows in both arrays and you 
 may return the result in any order.

 Example 1;
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

*/

var intersect = function(nums1, nums2) {
     let obj = {}
     let result = []

    //  for ( let num of nums1){
    //      if(!obj[num]){
    //          obj[num] = 1
    //      } else {
    //          obj[num] ++
    //      }
    //  }

    for (let num of nums1){
        
    // obj[num] = obj[num] + 1 || 1;

    obj[num] = (obj[num] || 0 ) + 1;
    }

   //  console.log(obj) { '4': 2, '5': 1, '9': 1 }
    
    for ( let num of nums2){
        if(obj[num] > 0){
            result.push(num)
            obj[num]--
        }
    }
    return result
};


console.log(intersect([4,9,5,4],[4,9])) //[4,9]
console.log(intersect([1,2,2,1],[2,2])) //[2,2]
console.log(intersect([4,9,5],[9,4,9,8,4])) //[9,4]

