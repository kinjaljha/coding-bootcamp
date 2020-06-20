var getMinRecord = (cost, src, dst) => {    
    if(src === dst || src+1 === dst) return cost[src][dst];
    let min = cost[src][dst];
    let c;
    for(let i=src+1;i<dst; i++){
        c = getMinRecord(cost, src, i) + getMinRecord(cost, i, dst);
        if(c<min){
          min = c;  
        } 
    }
    return min;    
}


var findCheapestPrice = function(n, flights, src, dst) {
    let cost = Array(n).fill(Infinity).map(() => Array(n).fill(Infinity));
    for(let flight of flights){
        cost[flight[0]][flight[1]] = flight[2];
    }
    let minCost = getMinRecord(cost, src, dst);
    return minCost;
};

// Example 1:
// Input: 
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2
// Output: 200

// Example 2:
// Input: 
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,50]]
// src = 0, dst = 2
// Output: 50