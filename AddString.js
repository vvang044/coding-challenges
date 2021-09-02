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
    let numOneInt = parseInt(num1)
    let numTwoInt = parseInt(num2)
    
    let result = numOneInt + numTwoInt
    
    return (JSON.stringify(result))
};