/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
class Node {
    constructor (cordinates, distance) {
            this.cordinates = cordinates,
            this.distance = distance
    }
}
class MaxHeap {
    constructor (node) {
        this.heap = [null];
        this.node = node;
    }
    getMax () {
        return this.heap[1]
    }
    getHeap(){
        return this.heap.slice(1);
    }
    insert (node) {
        this.heap.push(node)

        if (this.heap.length > 1) {
            let current = this.heap.length - 1
            while (current > 1 && this.heap[Math.floor(current/2)].distance <                                       this.heap[current].distance) {

                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current],                           this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }
    
    remove() {
        let largest = this.heap[1]
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1].distance < this.heap[2].distance) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return largest;
            }

            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current].distance < this.heap[leftChildIndex].distance ||
                        this.heap[current].distance < this.heap[rightChildIndex].distance)) {
                if (this.heap[leftChildIndex].distance > this.heap[rightChildIndex].distance) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex],                           this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex],                         this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return largest
    }
}



var kClosest = function(points, K) {
    let heap = new MaxHeap();
    let distance = new Map();
    let ecludian = 0;
    let values = []
    for(let cord of points){
        ecludian = (cord[0]*cord[0]) + (cord[1]*cord[1]);
        distance.set(ecludian, cord);
        values.push(ecludian);
    }
    let node = null;
    for(let i=0; i< K; i++){
        node = new Node(points[i], values[i]);
        heap.insert(node);
    }
    for (i = K; i < values.length; i++) {
        if (values[i] < heap.getMax().distance) {
          heap.remove();
          node = new Node(points[i], values[i]);
          heap.insert(node);
        }
    }
    
    let heapArray = heap.getHeap();
    let result = [];
    for(let ele of heapArray){
       result.push(ele.cordinates);
    }
    return result;
};

console.log("----->", kClosest([[1,3],[-2,2]], 1))

// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)