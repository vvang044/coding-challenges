function mergeSort(arr){ //0(logn)
    //if the array is length [1] its already sorted
    if(arr.length < 2 ){
        return arr
    }
 
        // find the middle index of the array
    const middleIndex = Math.floor(arr.length / 2 )
    //slice is from and to, slice up until
    //[1,2,3,4]
    const leftArr = arr.slice(0, middleIndex)
    //from the middle of the array till the last index
    //[1,6,4,2,3] arr.slice(1,4) gives you [6,4,2]
    //so we dont need to do arr.length-1
    const rightArr = arr.slice(middleIndex, arr.length)

    //we will return helper function,
    return merge(mergeSort(leftArr), mergeSort(rightArr)) //0(n)
    //mergeSort left[12,3,16], mergeSort right[6,5,1]
}
//O (n log n)
//create the helper function
//for instance left array = [3, 12, 16]
//for instance right array = [1, 6, 15]
//       [3, 12, 16 ] [1, 6, 15]
//indexes 0   1   2    0  1   2
//
function merge(leftArr, rightArr){
    let resultArr = []
    //we are going to divide and conquer
    let leftIndex = 0;
    let rightIndex = 0

    //will compare element by element
    //for the while loop to continue
    //both the left index and right index should be less than corresponding arrays
    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        //leftArr 0   < rightArray 0..... jumps to else statement
        
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            resultArr.push(leftArr[leftIndex]);
            leftIndex += 1
        } else {
            // resultArr.push....rightArray index 0 is 1
            //resultArr [1]
            resultArr.push(rightArr[rightIndex]);
            rightIndex +=1
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

let arr = [12,3,16,6,5,1];
console.log(mergeSort(arr))

//Explanation
//both left index and right index should be less than corresponding array length
//if our leftArr is 0 is it less than rightArr which is 0.....it jumps to else statement
//resultArr which is empty [........]
//push rightArr [1,6,15].......0 index is 1
//resultArr which will beocme [1,..........]
//increment the rigthIndex +=1

//leftIndex =0
//rightIndex = 1, which is 6
//now lets go back to while loop
//leftArr[leftIndex] is 3, Is 3 less than 6?
//Yes..........we push our 3 to resultArry
//resultArr which will beocme [1, 3, .........]

//leftIndex =1, which is 12
//rightIndex = 1, which is 6
//back to while loop
//is 12 < 6 ?...NO ....we will use our else statement
//which is going to push are rightArr[rightIndex] which is 6
//we push 6 to result
//resultArr which will beocme [1, 3, 6,........]
//increment the rightIndex

//leftIndex =1, which is 12
//rightIndex =2, which is 15
//now lets go back to while loop
//is 12 < 15 ?....YES....
//which is going to push leftArr[leftIndex] which is 12
//we push 12 to result array
//resultArr which will beocme [1, 3, 6, 12,......]
//increment leftIndex

//leftIndex =2, which is 16
//rightIndex =2, which is 15
//now lets go back to while loop
//is 16 < 15....No.....we will use our else statement
//which is going to push our rightArr[rightIndex] which is 15
//we push 15 to result 
//resultArr which will beocme [1, 3, 6, 12, 15,.....]
//increment rightIndex by 

//leftIndex = 2
//rightIndex = 3
//now the while loop will terminate 
//leftIndex is less than leftArr.length
//at this month rightIndex is equal to right array length

//as we can see 16 is left and is not pushed to result array
//so we will add this at the end
//return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
//if you look up
//resultArr is [1,3,6,12,15] + leftArr.slice is [16] + rightArr.slice right index is 3 which is zero
//with all combined result array will be
//[1,3,6,12,15,16]