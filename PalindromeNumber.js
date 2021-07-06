//Given an integer "x", return "true" if "x" is palindrome interger
//An integer is a palindrom when it reads the same backward as forwards
//For example, 121 is a palindrome, while 123 is not

//***Could you solve it without converting the interget to a string?

//Example 1
//Input: x = 121
//Output: true

//Example 2
//Input: x = -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it becomes 
// 121-. Therefore it is not a palindrome

//Example 3
//Input: x = 10
//Output: false
//Explanation: Reads 01 from right to left. Therefore it is not a palindrome

//Example 4
//Input: x = -101
//Output: false

let isPalindrome = function(X){

    let reversed = 0;
    let y = x;

//if x less than 0 it is false and if x module 10 is strict equal to 0 its false
    if ( x < 0 && x % 10 === 0 ){
        return false;
    } 
    // if x is less than 10. 1,2,3,4,5,6,7,8,9 then its true or greater than equal to 0
     else if ( x < 10 && x >=0 ){
         return true
     }

     while ( y > 0 ){
         reversed = ( reversed * 10) + ( y % 10);
         y = Math.trunc( y / 10 )
     }

     return x === reversed
}

