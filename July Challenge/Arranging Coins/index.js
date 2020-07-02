/**
 * @param {number} n
 * @return {number}
 */
// var arrangeCoins = function(n) {
//     let row = 1, sum = 0;
//     while((sum+row) <= n){
//         sum += row; row++;
//     }
//     return row-1;
// };

var arrangeCoins = function(n) {
    
    if(n == 0 || n ==1) return n;
    
    let left = 1, right = n;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        let sum = (mid*(mid+1))/2;
        if(sum > n) right = mid;
        else left = mid+1;
    }
    return left-1
};

// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.