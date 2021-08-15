//Best way to remember Big O notation
// O(1) = O(yeah)
// O(log n) = O(nice)
// O(n) = O(ok)
// O(n²) = O(my)
// O(2ⁿ) = O(no)
// O(n!) = O(mg!)
//************************************** */

//Big O Notation
//is used to analysize the efficient 
//lets say you have dentist which takes 30mins to see one patient
//if the patients increase the dentist still takes 30 mins
//so this is linear equation which is 30 * patients which is Big O

//O(1) = O(yeah)
function linearfunction(arr){
    for (let i=0; i< arr.length; i++){ //O(n)
        console.log(1000*10000) 
        //this takes constant time, which is a constant always produces the same result
        // which is o(1)
        let something = (20000 * 20000) / 2; //which is O(1)
        console.log(something)              //which is O(1)
    }

    //O(n) + O(1) + O(1) = O(n) we ignore the 0(1)'s

}
const arr = [1,2,3,4,5]
linearfunction(arr)
//constants
function constatns(arr){
    var result = 100*1000 // every line of code is a function
    return result;
}
//we only care about the worse case, the highest order of performance trumps the other operations
//We eliminate non dominating items
//when evaluation algo efficienty we must bet ake into
//each order and steps that are contat or that are over one or as good as it gets in
//terms of efficenty. So we always ignore them unless the entirety of the function is constant
//or O(n) and in that case we would categorize the entire function as constant
//this is your answer to big O Notation

//*****************O(n2) O of n square*/
//example
function square(n){
    for(let i=0; i< n; i++){
        for(let j=0; j<n; j++){
            console.log(i,j)
        }
    }
}
//instead of console logging the cordinates, log the squares instead
//pass function square(4)
//first iterations is i=0 and j=0, i=0, j=1, i=0, j=2, i=0, j=3, i=0, j=4 
//second iterations is i=1 and j=0, i=1, j=1, i=1, j=2, i=1, j=3, i=1, j=4 
//so on you have a square
//0 1  2  3
//1
//2
//3
//The area of square is 4 x 4 this is going to equal number of cells within the matrix you just crated
//its the number of times this code runs is 16
//which is O(4(square)), which is O(n(square))

//****** O(n cubed) /
//to undersstand of O of n cube
function cube(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            for(let k=0; k<n; k++){
                console.log(i,j,k)
            }
        }
    }
}
//instead of console logging the coordinates i,j,k lets do squares
//if you do this way, you ahve height, width and length
//to get the volume of the cube it will be lx W x H which is 4 to the power 3
//which is O of n cube, which is 64
//so the above code runs 64 times
//this function is O of n cube

//*******O ( log n) ************************/
//first you need to understand wehat logirithm is
//simply put a logarithm is the power that a number needs to be raised
//to get some other number
//lets say 8
//we need to raise some number to power to get 8
//2 to the power 3 is 8
//in Log base 2 of 8 is 3
//O(log n)
//n = 8
function logFunc(n){
    if(n===0) return "Done";
    n = Math.floor(n/2);
    return logFunc(n);
}
//if we pass n = 8, it will gets divided by 2 and the new half
//gets passed on again as n using the logFunc
//logFunc(8) -- 8 / 2 = 4 , which is level 1
//logFunc(4) -- 4 / 2 = 2 , which is level 2
//logFunc(2) -- 2 / 2 = 1 , which is level 3
//which took 3 levels
//our funciton becomes o ( Log n)
//our function becomes O ( log base 2 , 8) which is 3

//**************O(log n) iterative/non-recursive******************** */
function logn(n){
    while (n > 1){
        n = Math.floor(n/2)
    }
}
//let n = 8
//iteration 1 : n = 8/2 = 4
//iteration 2 : n = 4/2 = 2
//iteration 3 : n = 2/2 = 1
//we will stop because n = 1
//so this function should be O ( log 8)
// which is o( log base 2, 8) = which is 2 to the power 3
//division is the inverse of multiplication
//thats why this non recursive function is O ( log N)

//*************Binary Search and O ( log n)******* */
//How does a binary search work and why is it usefull?
//Unordered array [34, 2, 52, 3], this will not work
//an array should be ascending or descending order
//Ordered Array Visuatlization
//[1,2,7,43,44,54,100,124]
//let's say we are looking for 100
//the naive way is iterate through each index to find 100
//if the array has a million it will take forenver.
//we will use binary search to find
//[1 , 2 , 7 , 43 , 44 , 54 , 100 , 124]
//start by finding the midpoint of the array above
//which will be somwhere around "43"
//values are increase after 43 -->
//left of the midpoint is decreasing

//for the time being if we pretend we are searching fof "2"
//it will be to the left of 43
// 2 < 43 < 100
//Is the number you're searching for is greater than or less than our midpoint?

//now we know 100 will be the right side of the midpoint
//we can get ride of the left midpoint numbers
//we will be left with [ 44 , 54 , 100 , 124]
//we cut the array into half
//now cut the [ 44 , 54 , 100 , 124] into by finding midpoint
//so the mid point is 2, which is 4 / 2,
//index 2 is 100

//Coding Binary Search
let arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
//we are going to pass starting index
let start = 0;
//we are going to get the last index
let end = arr.length - 1;
//we want the target value, the number you're looking for
let target = 8;

function binarySearch(arr, start, end, target){
    //if the target doesnt exist
    if ( start > end ) return false;


    let midIndex = Math.floor(( start + end ) / 2 );
    
    if(arr[midIndex] === target ) return true;
    //the value we are searching for is mid index then we return

    //if its not true is it on the left side of the array
    if ( arr[midIndex > target ] ) return binarySearch(arr, start, midIndex -1, target)
    //starting from midpoint, if mid is 5
    else return binarySearch(arr, midIndex + 1, end, target)
}

console.log(binarySearch(arr, start, end, target))


//**************O ( n log n) **********/