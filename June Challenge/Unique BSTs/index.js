var numTrees = function(n) {
    const dp = new Array(n + 1).fill(0)
    dp[0] = dp[1] = 1
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        dp[i] += dp[i - j] * dp[j - 1]
      }
    }
    return dp[n]
};

// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3