/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const counts = new Map()
    
    let maxLen = 0, count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] > 0 ? 1 : -1
        if (counts.has(count)) {
            maxLen = Math.max(maxLen, i - counts.get(count))
        } else if (count === 0) {
            maxLen = i + 1 
        } else {
            counts.set(count, i)
        }
    }
    
    return maxLen
};