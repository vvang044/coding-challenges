/*
Given two strings s and t, 
return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the 
original string by deleting some (can be none) of the characters 
without disturbing the relative positions of the remaining characters.
 (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 Example 1
Input: s = "abc", t = "ahbgdc"
Output: true
 

*/

/*
Two Pointer Solution
We designate two pointers for iteration, with the "left" pointer = source
and "right" pointer = target
We move the pointers accordingly
Source              Target
a b c               a h b g d c

if source[left] == target[right]: we found a match. hence we move both pointers on step forward
if source[left] !== target[right]: no match is found. We then move only the right pointer on the target string

The iteration would terminate, when either of the pointers exceeds its boundaries.

*/



var isSubsequence = function(s,t){

    let i= 0; j = 0;

    while ( i < s.length && j < t.length ){
        if(s[i] === t[j]){
            i++
        }
        j++;
    }

    return i === s.length
    

}

console.log(isSubsequence("abc", "eftghs"));//false
console.log(isSubsequence("abc", "ahbgdc"));//false