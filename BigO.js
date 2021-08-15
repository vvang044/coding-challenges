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

//*******O ( log n) */
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

