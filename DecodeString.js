/*Decode String
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
 is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 You may assume that the input string is always valid; No extra white spaces, 
 square brackets are well-formed, etc.
Furthermore, you may assume that the original data does not contain any 
digits and that digits are only for those repeat numbers, k. For example, 
there won't be input like 3a or 2[4].

*/

var decodeString = function(s){
    let multiply = [];
    let repeatStr = []
    let tempMultiplyer = ''
    let result = ''


    //iterate through the above string

    for( let char of s){
        //check if char is a number
        if(!isNaN(char)){
            tempMultiplyer = `${tempMultiplyer}${char}` 
        } else if ( char === '['){
            
            
            multiply.push(tempMultiplyer) 
           // console.log( multiply.push(tempMultiplyer) )
            tempMultiplyer = '';

            repeatStr.push(result) 
            // console.log(repeatStr.push(result))

            result = '';

        } else if ( char === ']'){
            result = repeatStr.pop() + result.repeat(multiply.pop())
        } else {
            result = result + char
        }
    }

    return result;

}

console.log(decodeString("3[a2[c]]"))

//explanation
//3[a2[c]]
//first iteration is 3
// gets push to tempMultiplyer 3 gets assigned,

//second iteration is [
//you need to store the items you're going to multiply or repeat
//multiply.push(tempMultiplyer) and we reset it to empty string
//which will be [3]
//repeatStr.push(result) ['']
//reset the result to ''

//third iteration is a
//so string that gets repeat or substring
//result = result + char -> ' ' + a

//fourth iteration is 2
//gets push to tempMultiplyer 2 gets assigned

//fiveth iteration is [
// you need to store the item you're going to multiple or repeat
//multiply.push(tempMultiplyer) and we reset it to empty string
//which will be [3,2]
//repeatStr.push(result) ['',a]
//reset the result to ''

//sixth iteration is c
//so string that gets repeated or substring
//result = result + char = > ' ' + c

//seventh iteration is ]
//



