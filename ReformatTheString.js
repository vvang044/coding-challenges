/*
Given alphanumeric string s. (Alphanumeric string is a string consisting of 
    lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed 
by another letter and no digit is followed by another digit. That is, 
no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is 
impossible to reformat the string.

Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in 
"0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

Input: s = "leetcode"
Output: ""
Explanation: "leetcode" has only characters so we cannot separate them by digits.
*/

let ReformatString = function (string){
    let letters = [];
    let digits = [];
    let result = []

    for (let character of string) {
        if ('a' <= character && character <= 'z') {
            letters.push(character);
        }   else {
            digits.push(character);
        }
    } 
   // return digits; [1,2]
   // return letters [a,b]

        if(Math.abs(letters.length - digits.length) > 1) return '';
    
       let i = 0, j = 0;
       
       let diff = letters.length < digits.length ? true : false;
       
       while( i < letters.length && j < digits.length){
           if(diff){
               result.push(digits[j++]);    
               result.push(letters[i++]);    
           }else{
               result.push(letters[i++]);
               result.push(digits[j++]);
           }  
       }  

    while(i < letters.length) result.push(letters[i++]);
    
    while(j < digits.length) result.push(digits[j++]);
    
    return result.join('');
     
   
        }


console.log(ReformatString('covid2019'))
console.log(ReformatString('abc123'))