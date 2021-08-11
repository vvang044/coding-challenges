
/*
From Cracking the coding interview
Q. Is Unique
Implement an algorithm to determine if a string has all unique characters. What if you cannot
use additional data structures.
I(input): string
O(output): string
C(constraints): cannot use additional data structures
E(edge cases): use empty string
*/

let isUnique = (s) => {
    //psuedocode
    //check each character and store it in hash table
    //if you do find that the character is already there then return false
    //when done checking then return true
    //all objects are hastables in Js

    let hash = {}

    for ( let i=0; i<s.length; i++){
        let c = s[i]
        
        if (hash[c]){
            return false;
        } else {
            hash[c] = true;
        }

    }
    return true;

}

console.log(isUnique('s') === true)
console.log(isUnique('ss') === false)
console.log(isUnique('') === false)
console.log(isUnique('stories') === false)
console.log(isUnique('cam') === true); 