/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const combinations = Array(amount+1).fill(0);
    
    combinations[0] = 1;
    
    for(let coin of coins){
        for(let i=0; i< combinations.length; i++){
            if(i >= coin){
                combinations[i] += combinations[i-coin];
            }
        }
    }
    return combinations[combinations.length-1];
};

// Example 1:

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10] 
// Output: 1