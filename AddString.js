/*
Given two non-negative integers, num1 and num2 represented as string,
 return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for
 handling large integers (such as BigInteger). You must also not convert
  the inputs to integers directly.


 
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    // let numOneInt = parseInt(num1)
    // let numTwoInt = parseInt(num2)
    
    // let result = numOneInt + numTwoInt
    
    // return (JSON.stringify(result))


    sum = '';
    len1 = num1.length;
    len2 = num2.length;
    carry = 0;

    while(len1 > 0 || len2 > 0 || carry) {
        num1Digit = +num1.charAt(len1-1);
        num2Digit = +num2.charAt(len2-1);
        len1--;
        len2--;
        
        digitTotal = num1Digit + num2Digit + carry;
        carry = Math.floor(digitTotal / 10);
        digitToAppend = digitTotal % 10;
        sum = digitToAppend + sum;
    } 

    return sum;

};