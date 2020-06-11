/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     let key, j;
//     for(let i=0; i< nums.length; i++){
//         key = nums[i];
         
//         j = i-1;
//         while(j>=0 && key < nums[j]){
//             nums[j+1] = nums[j];
//             j--;
//         }
//         nums[j+1] = key;
//     }
// };

var sortColors = function(nums) {
    
    if(nums.length < 2) return nums;
    
    let ptr0 = 0;
    let ptr2 = nums.length - 1;
    
    while(nums[ptr0] === 0) ptr0++;
    while(nums[ptr2] === 2) ptr2--;
    if(ptr0 > ptr2) return nums;
    
    let ptr = ptr0;
    
    while(ptr <= ptr2){
        if(nums[ptr] === 2){
            [nums[ptr], nums[ptr2]] = [nums[ptr2], nums[ptr]];
            ptr2--;
        }
        else if(nums[ptr] === 0){
            if(ptr > ptr0){
                [nums[ptr], nums[ptr0]] = [nums[ptr0], nums[ptr]];
            }
            else{
                ptr++;
            }
            ptr0++;
        }
        else{
            ptr++;
        }
    }
};


// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:

// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?