/*
Return the length of the longest word in the provided sentence
Your response should be a number

*/

function findLongestWordLength(str){

    let splitStrArray = str.split(' ');
    let longestWord = '';

    for(let i=0; i<splitStrArray.length; i++){
        if(splitStrArray[i].length > longestWord.length){
            longestWord = splitStrArray[i]
        }
    }

    return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWordLength("May the force be with you"))