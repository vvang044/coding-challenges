//1st solutions
//create a stack that holds all the indeces 
//traverse through the given input
//if we come across open brakets we push it to our stack
//if we don't come across an opening brackets but we see closing brackets
// we remove the last bracket from the stack
// if the last bracket we pushed is [ and the index is ] we remove '[ '
//or vice versa
var isValid = function (s){
   
    let stack = []
      for(let i=0;i < s.length; i++){
        if ( s[i] === "(" || s[i] === "{" || s[i] === "["){
          stack.push(s[i])
        } else{
          if(stack.length === 0) return false
          let lastBracket = stack[stack.length-1]
          if( (s[i] === ']' && lastBracket === '[') || 
             (s[i] === '}' && lastBracket === '{') || 
             (s[i] === ')' && lastBracket === '('))
          {
            stack.pop()
          } else {
            break;
          }
        }
      }
      return stack.length === 0
    };
    
    
console.log(isValid("()"))
console.log(isValid("[]"))
console.log(isValid("()[]"))
console.log(isValid("{[]}"))

//2nd solution
// var isValid = function (s){
//     let stack = 0;
// for( let i=0; i<s.length; i++){
//     if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '['){
//         stack +=1;
            
//     } else {
//         stack -=1;
//     } 
//     if (stack < 0 ) {
//         return false;
//     } 
// }
// if( stack === 0){
//     return true;
// } else {
//     return false;
//     }

// }

// // console.log(isValid("()")) // true
// console.log(isValid("(){}"))
