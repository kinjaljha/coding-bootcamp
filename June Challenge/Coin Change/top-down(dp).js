/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var countDenomination = (dp, amount, coins, currentIndex) => {
    if(amount === 0){
        return 1;
    }
    if(coins.length === 0 || currentIndex >= coins.length){return 0;}
    
    if(dp[currentIndex][amount] != null){return dp[currentIndex][amount]}
    
    let sum1 = 0;
    if(coins[currentIndex] <= amount){
        sum1 = countDenomination(dp, amount - coins[currentIndex], coins, currentIndex);
    }
    
    let sum2 = countDenomination(dp, amount, coins, currentIndex+1);
    
    dp[currentIndex][amount] = sum2 + sum1;
    return dp[currentIndex][amount];
}
var change = function(amount, coins) {
    // let dp = Array([coins.length][amount+1]);
    const dp = Array(coins.length)
    .fill(null)
     .map(() => Array(amount+1).fill(null));

    return countDenomination(dp, amount, coins, 0);
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