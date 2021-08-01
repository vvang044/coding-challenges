/*CRACKING THE CODING INTERVIEW
*CHECK PERMUTATION
*Given two strings, write a method to decide if one is a permutation of the other
I(input): 2 strings
O(output): boolean
C(constraints): optimize
E(edgecases): empty string

//time complexity : linear 0(2n)
// space complexity : linear 0(n)
*/

let checkPerm = (str1, str2) => {
    //if two strings have different lengths automatically return false
    // one way would be sort and compare, will be 0(n log n) not 
    //other way is make a hash table, map of one string and check with second string

    let hash = {};

    if (str1.length !== str2.length){
        return false
    }

    //traverse and fill the has table
    //loop through the first string
    //save the index of the string in the hash table
    //if that character is in the hash, then increase the count of character
    //otherwise we will store that character
    for (let i=0; i<str1.length; i++){
        let character = str1[i];
        if (hash[character]){
            hash[character]++
        } else {
            hash[character] = 1;
        }
    }

    //loop through second string
    //save the index of the string in the hash table
    //if it is in the hash table already and this character is not equal to zero
    //then we will subtract
    //other we will return false

    for ( let i=0; i<str2.length; i++){
        let character = str2[i]
        if ( hash[character] && hash[character] !== 0){
            hash[character]--;
        } else {
            return false;
        }
    }

    return true;
}

console.log(checkPerm('', '') === true);
console.log(checkPerm('so', 'os') === true);
console.log(checkPerm('sos', 'os') === false);
console.log(checkPerm('abc', 'abz') === false);
console.log(checkPerm('restful', 'fluster') === true);
console.log(checkPerm('baab', 'bbba') === false);
