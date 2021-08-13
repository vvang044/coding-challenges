//Given an array "nums". We define a running sum of an array
// as runningSum[i] = sum(nums[0].....nums[i])
//Return the running sum of nums
//Example1
//Input nums = [1,2,3,4]
//Output: [1,3,6,10]
//explanation: running sum is obtained as follows:
//[1, 1+2, 1+2+3, 1+2+3+4]
//Example2
//Input nums = [1,1,1,1,]
//Output: [1,2,3,4,5]

let runningSum = function(nums){
    //define variable that holds the final array of results
    let result = []

    //we need to save the sum of index 0 + 1, use these two at 2, ......so on
    currentSum = 0;

    //traverse through the array given
    for(let i=0; i<nums.length; i++){
        //keep track of which index you're at
    currentIndex = nums[i];

    //the current sum will be currentSum + currentIndex -> 0 + 1 = 1
    //the current sum will be currentSum(1) + curretIndex(2) -> 1 + 2 = 3

    currentSum += currentIndex;

    //once we have the current sum we are going to push this to our final result
    result.push(currentSum);
    }
    
    return result;

}

console.log(runningSum([1,2,3,4])) // [1,3,6,10]
console.log(runningSum([1,1,1,1])) // [1,2,3,4]
