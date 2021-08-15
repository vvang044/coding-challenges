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
//The area of square is 4 x 4 this is going to equal number of cells within the matrix you just crated
//its the number of times this code runs is 16
//which is O(4(square)), which is O(n(square))

