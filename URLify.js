/*Write a method to replace all spaces in a string with %20
you may assume that the string has sufficient space at the end to hold
the additional characters, and that you are given the "true"
lendth of the string.
EXAMPLE
Input: "Mr John Smith    ", 13
Output: "Mr%20John%20Smith"

I(input): string, number
O(output): string
C(constraint): optimize
E(Edge Cases): emptry string, spaces in the front and middle
*/

let urlify = (str, n = str.length) => {
    //first pass we count the number of non space characters in string
    // we will use that number of spaces allowed
    //subtract characters from true length to see how many spaces we are allowed to replace
    //with %20

    //second pass we are going to add 
    // if we see a space and there are spaces left we will append %20 to output the string
    //otherwise copy the current character
    //when we run out of spaces, append the empty string instead

    let out = '';
    let chars = 0;

    //first pass
    for ( let i=0; i < str.length; i++){
        let character = s[1]
    }



}


