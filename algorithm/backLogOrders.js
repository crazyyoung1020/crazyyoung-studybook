/**
 * @param {number[][]} orders
 * @return {number}
 */
 var getNumberOfBacklogOrders = function(orders) {
    // sell 小顶堆
    let minHeap = new Heap();
    // 节点结构为 [price, amount]
    // 根据节点price构建堆
    var cmp = (a, b) => a[0] < b[0];
    // buy 大顶堆
    let maxHeap = new Heap(cmp);
    for (let arr of orders) {
        // buy时 看 sell小顶堆
        if (arr[2] == 0) {
            while (true) {
                // 小顶堆堆顶订单数量足够抵消 buy订单数量，还有剩余时
                if (minHeap.heap.length > 0 && minHeap.heap[0][0] <= arr[0] && minHeap.heap[0][1] > arr[1]) {
                    // 小顶堆堆顶订单数量为 抵消buy订单后 余下的数量
                    minHeap.heap[0][1] = minHeap.heap[0][1]-arr[1];
                    break;
                // 小顶堆堆顶订单数量全部抵消 buy订单数量， 或者不够抵消时
                } else if (minHeap.heap.length > 0 && minHeap.heap[0][0] <= arr[0] && minHeap.heap[0][1] <= arr[1]){
                    // 还剩下的buy订单，待会和重构的sell小顶堆重新匹配
                    arr[1] -= minHeap.heap[0][1];
                    // 移除sell小顶堆堆顶
                    minHeap.heap[0] = minHeap.heap[minHeap.heap.length-1];
                    minHeap.heap.pop();
                    minHeap.siftDown(0);
                // 剩余订单为0，退出循环
                } else if (arr[1] == 0) {
                    break;
                // 阻塞了，剩下订单全堆积 
                } else {
                    maxHeap.heap.push([arr[0], arr[1]]);   // 节点结构是 [price, amount]
                    maxHeap.siftUp(maxHeap.heap.length-1);
                    break;
                }
            }
        // sell时 看 buy大顶堆
        } else {
            while (true) {
                if (maxHeap.heap.length > 0 && maxHeap.heap[0][0] >= arr[0] && maxHeap.heap[0][1] > arr[1]) {
                    // 大顶堆堆顶订单数量为 抵消sell订单后 余下的数量
                    maxHeap.heap[0][1] = maxHeap.heap[0][1]-arr[1];
                    break;
                } else if (maxHeap.heap.length > 0 && maxHeap.heap[0][0] >= arr[0] && maxHeap.heap[0][1] <= arr[1]){
                    // 还剩下的sell订单，待会和重构的buy大顶堆重新匹配
                    arr[1] -= maxHeap.heap[0][1];
                    // 移除buy大顶堆堆顶
                    maxHeap.heap[0] = maxHeap.heap[maxHeap.heap.length-1];
                    maxHeap.heap.pop();
                    maxHeap.siftDown(0);
                // 剩余订单为0，退出循环
                } else if (arr[1] == 0) {
                    break;
                // 阻塞了，剩下的全堆积 
                } else {
                    minHeap.heap.push([arr[0], arr[1]]);    // 节点结构为 [price, amount]
                    minHeap.siftUp(minHeap.heap.length-1);
                    break;
                }
            }
        }
    }
    let count = 0;
    // 积压订单数为两个堆每个节点积压的订单数
    for (let arr of maxHeap.heap) {
        count += arr[1];
    }
    for (let arr of minHeap.heap) {
        count += arr[1];
    }
    return count % 1000000007;
};


// 默认小顶堆
var defaultCmp = (a, b) => a[0] > b[0];
class Heap {
    constructor(cmp=defaultCmp) {
        this.heap = []; // 每个节点结构是 [price, amount]
        this.cmp = cmp;
    }
    siftUp(i) {
        while (i > 0) {
            // const parent = (i - 1) >> 1;
            const parent = Math.floor((i - 1)/2)
            if (this.cmp(this.heap[parent], this.heap[i])) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            } else {
                break;
            }
        }
    }
    siftDown(i) {
        while (2 * i + 1 < this.heap.length) {
            let child = 2 * i + 1;
            if (child + 1 < this.heap.length && this.cmp(this.heap[child], this.heap[child + 1])) {
                child++;
            }
            if (this.cmp(this.heap[i], this.heap[child])) {
                [this.heap[child], this.heap[i]] = [this.heap[i], this.heap[child]];
                i = child;
            } else {
                break;
            }
        }
    }
}