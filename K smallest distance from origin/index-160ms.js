/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    points.sort((a, b) => a[0]*a[0] + a[1]*a[1] - b[0]*b[0] - b[1]*b[1]);
    return points.slice(0, K)
};

console.log("----->", kClosest([[1,3],[-2,2]], 1))

// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)