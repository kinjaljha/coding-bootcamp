/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function(n) {
//     if(n>=0)    return (n !==0 && (n & (n-1)) === 0);
//     return (n !==-1 && (n & (n+1)) === 0)
// };

var isPowerOfTwo = function(n){
    let power = 0;
    let deg = 0;
    while(power <= n){
        power = Math.pow(2,deg);
        if(power === n) return true;
        deg++;
    }
    return false;
}

// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true 
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false