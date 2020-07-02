/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length == k){
        return "0"
    }
        for (let j = 0; j < k; j++) {
            let i = 0;
            while (i < num.length - 1 && num.charAt(i) <= num.charAt(i + 1)) {
                i++;
            }
            num = num.replace(num.charAt(i),"");
        }
        //remove leading 0's
        while (num.length > 1 && num.charAt(0) == '0')
            num = num.slice(1);
        if (num.length == 0) {
            return "0";
        }
        return num.toString();
};