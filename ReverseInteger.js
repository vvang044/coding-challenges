// Easy Challenge from LeetCode
//Given a signed 32-big integer "x" return "x" with its
// digits reversed. If reversing "x" causes the value to go
//outside the signed 32-bit integer range [-231, 231 - 1],
//minus -2 to power 31
//2 to power 31
// then return 0

//Example 1:
// Input x = 123
// Output x = 321

//Example 2:
//Input x = -123
//Output x = -321

var reverse = function(x){

    const number = Math.abs(x).toString().split('').reverse().join('');

    if ( number > 2**31){
        return 0
    } else if ( x < 0 ){
        return -number
    } else {
        return number;
    }
}