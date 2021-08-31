/*
You are given an array prices where prices[i] is the price of a 
given stock on the ith day.

You want to maximize your profit by choosing a single day to 
buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
 profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed 
because you must buy before you sell.

Example 2
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

//linear o(n)

// var maxProfit = function(prices){
//     let maximumProfit = 0;
//     let minimumProfit = prices[0]

//     for ( let price of prices){
//         maximumProfit = Math.max(maximumProfit, price-minimumProfit)
//         minimumProfit = Math.min(price, minimumProfit)
//     }

//     return maximumProfit;
// }

// console.log(maxProfit([7,1,5,3,6,4]));

//brute force method

var maxProfit = function(prices){
    let maximumProfit = 0;
    for ( let dayBought = 0; dayBought < prices.length; dayBought++){
        let buyingPrice = prices[dayBought];

    for(let sellingDay = dayBought + 1; sellingDay < prices.length; sellingDay++){
        let profit = prices[sellingDay] - buyingPrice;
        maximumProfit = Math.max(maximumProfit,profit);
    }
    }

    return maximumProfit
}
console.log(maxProfit([7,1,5,3,6,4]));
