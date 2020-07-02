var getMinRecord = (cost, src, dst, K) => {    
    if(K==0 && src == dst) return 0;
    if(K==0 && cost[src][dst] != Infinity) return cost[src][dst];
    if(K<=0) return Infinity;
    
    let c, res = Infinity;
    for(let i=src+1;i<dst; i++){
        if(cost[src][i] !== Infinity){
            c = getMinRecord(cost, i, dst, K-1);
            if(c != Infinity){
                res = Math.min(res, cost[src][i] + c);
            }
        }
    }
    return res;    
}


var findCheapestPrice = function(n, flights, src, dst, K) {
    let cost = Array(n).fill(Infinity).map(() => Array(n).fill(Infinity));
    for(let flight of flights){
        cost[flight[0]][flight[1]] = flight[2];
    }
    for(let i=0; i<n; i++) cost[i][i] = 0;    
    let minCost = getMinRecord(cost, src, dst, K);
    return minCost;
};

// There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

// Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

// Example 1:
// Input: 
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 1
// Output: 200

// Example 2:
// Input: 
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 0
// Output: 500