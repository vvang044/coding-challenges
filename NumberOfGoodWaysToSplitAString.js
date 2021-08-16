/*
Number of Good Ways to Split a String
You are given a string "s", a split is called 'good' if you can split 's' into 2 non
-empty strings 'p' and 'q', where its concatenation is equal to 's' and the
number of distinct letters in 'p' and 'q' are the same

Return th enumber of 'good' splits you can make in s

Example 1
Input: s = "aacaba"
Output: 2
Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.

Input: s = "abcd"
Output: 1
Explanation: Split the string as follows ("ab", "cd").


*/

var numSplits = function (s){

    let result = 0;
    const array = [], left = new Set(), right = new Set();

    for (let i=0; i < s.length; i++){

        left.add(s[i]) // {'a'} - {'a', 'c'} - {'a', 'c'} - {'a','c','b'}

        array.push(left.size); //[1,1] - [1,1,2] - [1,1,2,2] - [1,1,2,2,3]
    }

    for( let i = s.length-1; i>0; i--) {
        
      right.add(s[i]) // { 'a' } ,Set(2) { 'a', 'b' } ,Set(2) { 'a', 'b' } , Set(3) { 'a', 'b', 'c' }

      if(array[i-1] === right.size)    result++


    }

    return result;
}

console.log(numSplits("aacaba"))