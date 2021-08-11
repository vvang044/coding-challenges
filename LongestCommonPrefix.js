//Write a function to find the longest common prefix
//string amongts an array of string
//if there is a no common prefix return empty string ""
//Example
//Input: strs = ["flowers", "flow", "flight"]
//Output: "fl"

//Example
//Input strs = ["dog", "racecar", "car"]
//Output: ""
//Explanation: There is no common prefix among the input strings

var longestCommonPrefix = function(strs){
    let prefix = ''

    if(strs.length === 0){
        return prefix;
    }

    let comparisonWord = strs[0]; //flower
    let comparisonIndex = 0; //f

        //loop through every letter in the word flower
    for ( let comparisonLetter of comparisonWord){
        //get the other letters we are going to compare it to, this case its fly, flight
        //i=1 because we are going to compare it with fly
        for ( let i =1; i<strs.length; i++){
            //variable to represent actual words we are at.
            let currentWord = strs[i];
            //variable to know which letter we are on
            let currentLetter = currentWord.charAt(comparisonIndex);
            //we are at letter "f" in "fly"
            if(comparisonLetter !== currentLetter || comparisonIndex > currentWord.length){
                return prefix;
            }
        }
        comparisonIndex++;
        prefix += comparisonLetter;
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","fly","flight"]));

// let strs = ["flower", "flow", "right"]




