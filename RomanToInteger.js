//Roman numerals represented by seven different symbols:
// I, V, X, L, C, D, M
//SYMBOL            VALUE
// I                   1
// V                   5
// X                   10
// L                   50
// C                   100
// D                   500
// M                   1000

//Roman numerals are usally written largest to smallest from left to right.
//However, the numerals for four is not IIII. Instead the number four is written as IV
//Because the one is before the five we subtract it making four.
//The same principle applies to the number which is IX

let romanToInt = function(s){
    let total = 0;

    let romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for ( let i =0; i<s.length;i++){
        let currentValue = romanNumerals[s[i]];
        let nextValue = romanNumerals[s[i+1]];

        if(nextValue){
            if(currentValue >= nextValue){
                 total = total + currentValue;
            } else {
                 total = total + ( nextValue - currentValue)
            i++
                };

        } else {
            return total = total + currentValue;
        }
    
    }
    return total;

}

romanToInt('MCMXCVI');
console.log(romanToInt('MCMXCVI'));

//MCMXCVI
//M is larger than C, so the if statement will kick it and return 1000 total = 0 + 1000
//M is used go to next 
//C is smaller than M, so the else statement will kick in and return total = total + ( M(nextvalue) - C(currentValue)) = 900
//C & M used go to next
//X is small than C, so the else statement will kick in and return total = total + (C(nextvalue) - X(currentValue)) = 90
//X & C used go to next
// V is larger than I, so the if statement will kick in and return total = 0 + V(current Value) = 5
// I is greater and no other element, if statement will kick and add to total = 1
// answer will be 1996
