/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    // let sum = 0;
    let freq = new Map();
    let ans = []
    freq.set(0,0);
    freq.set(1,1);
    freq.set(2,1);
    freq.set(3,2);
    for(let ele=0; ele<=num; ele++){
        if(!freq.has(ele)){
                let sum2=0;
                let ele1 = ele;
                while(!(freq.has(ele1))){
                    if(ele1%2){ //odd
                        ele1 = ele1 - 1;
                        sum2 += 1; // add 1 for odd
                        
                    }
                    ele1 = Math.ceil(ele1/2);
                    if(freq.has(ele1)){
                        sum2 += freq.get(ele1);
                        break;
                    }    
                }
            freq.set(ele, sum2);
        }
        ans.push(freq.get(ele));
    }
    return ans;
      
};