/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const obj = nums.reduce((count, ele)=>{
        if(ele in count){
            count[ele]++;
        }
        else{
            count[ele] = 1;
        }
        return count;
    },{})
    for (const property in obj) {
        if(obj[property] === 1){
            return property;        
        }
    }
};
