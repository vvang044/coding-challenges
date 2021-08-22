/*
A sentence is a string of single-space separated words where each word 
consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, 
and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words.
 You may return the answer in any order.

 Example 1
 Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

Example 2
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

*/

var uncommonFromSentences = function(s1,s2){

    let sentence = s1.split(' ').concat(s2.split(' '))

    let result =  sentence.filter( (words, index) => sentence.indexOf(words) === sentence.lastIndexOf(words))
    
   return result
    

    

    /*
    Alternate solution
    
    
    
    */



}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'))