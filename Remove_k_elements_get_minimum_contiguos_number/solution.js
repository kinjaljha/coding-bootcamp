/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length == k){
        return "0"
    }
    let j = num.length - k;
    let windowStart = 0;
    let min = parseInt(num);
    for(let windowEnd=0; windowEnd<num.length; windowEnd++){
        if(windowEnd >= j-1){
            let num_str = num.slice(windowStart, windowEnd + 1);
            while(num_str[0] == 0 && num_str.length !== 1){
                num_str = num_str.slice(1);
            }
            let sliced = parseInt(num_str);
            if(sliced < min){
                min = sliced;
            }
            windowStart += 1; // slide the window
        }
        
    }
    return min.toString();
};

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.