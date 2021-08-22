/*
Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "anagram", t = "nagaram"
Output: true

*/

var isAnagram = function(s,t){

    let obj = {}
    //if two strings have different lengths automatically return false
    // one way would be sort and compare, will be 0(n log n) not 
    //other way is make a hash table, map of one string and check with second string
    if(s.length !== t.length){
        return false;
    }

    //traverse and fill the has table or obj
    //loop through the first string
    //save the index of the string in the hash table
    //if that character is in the hash, then increase the count of character
    //otherwise we will store that character
    for (let i=0; i<s.length; i++){
        let character = s[i];
        if (obj[character]){
            obj[character]++
        } else {
            obj[character] = 1;
        }
    }


    for ( let i=0; i<t.length; i++){
        let character = t[i]
        if ( obj[character] && obj[character] !== 0){
            obj[character]--;
        } else {
            return false;
        }
    }

    return true;

}

// console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "tar"))

