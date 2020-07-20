const check = (str) => {
    const MAX = 256;
    let arr = Array(MAX).fill(false);
    for(let i=0; i< str.length; i++){
        let ascii = str.charCodeAt(i);
        if(arr[ascii]) return false;
        arr[ascii] = true;
    }
    return true;
}
(function main() {
    let str = "Helo";
    let ans = check(str);
    console.log(ans);
}());

