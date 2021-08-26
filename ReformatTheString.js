/*
*/

let ReformatString = function (string){
    let letters = [];
    let digits = [];
    let result = []

    for (let character of string) {
        if ('a' <= character && character <= 'z') {
            letters.push(character);
        }   else {
            digits.push(character);
        }
    } 
   // return digits; [1,2]
   // return letters [a,b]

        if(Math.abs(letters.length - digits.length) > 1) return '';
    
       let i = 0, j = 0;
       
       let diff = letters.length < digits.length ? true : false;
       
       while( i < letters.length && j < digits.length){
           if(diff){
               result.push(digits[j++]);    
               result.push(letters[i++]);    
           }else{
               result.push(letters[i++]);
               result.push(digits[j++]);
           }  
       }  

    while(i < letters.length) result.push(letters[i++]);
    
    while(j < digits.length) result.push(digits[j++]);
    
    return result.join('');
     
   
        }


console.log(ReformatString('covid2019'))
console.log(ReformatString('abc123'))