/**
 * @param {number[][]} orders
 * @return {number}
 */
 var getNumberOfBacklogOrders = function(orders) {
    let BuyQ = []; //<价格, 数目>，大顶堆
    let SellQ = [];  //<价格, 数目>，小顶堆
    orders.forEach((order)=>{
        if (order[2] == 0) {   //当前订单是Buy，需要找最小的Sell
            while (order[1] > 0 && SellQ.length>0 && order[0] >= SellQ[SellQ.length-1][0] ) {  //当前订单数目大于0，Sell最低价<= 当前订单价格
                if (order[1] > SellQ[SellQ.length-1][1]) {  //当前订单数 > Sell最低价的订单数
                    order[1] -= SellQ.pop()[1];  //Sell中最低价被删除
                } else if (order[1] == SellQ[SellQ.length-1][1]) {  //当前订单数 == Sell最低价的订单数
                    SellQ.pop();  //Sell中最低价被删除
                    order[1] = 0;
                } else if (order[1] < SellQ[SellQ.length-1][1]) { //当前订单数 < Sell最低价的订单数
                    let minSell = SellQ.pop(); //更新Sell最低价的订单数量
                    // SellQ.push([minSell[0], minSell[1] - order[1]]);
                    addQueue(SellQ,[minSell[0], minSell[1] - order[1]],1)
                    order[1] = 0;
                }
            }
            if (order[1] > 0){
                addQueue(BuyQ,[order[0], order[1]],0)
            }//当前订单数还有余留，则压入队列中
        } else {  //当前订单是Sell，需要找最大的Buy
            while (order[1] > 0 && BuyQ.length>0 && BuyQ[BuyQ.length-1][0] >= order[0]) {  //当前订单数目大于0，Buy最高价>= 当前订单价格
                if (order[1] > BuyQ[BuyQ.length-1][1]) {  //当前订单数 > Buy最高价的订单数
                    order[1] -= BuyQ.pop()[1];  //Buy最高价被删除
                } else if (order[1] == BuyQ[BuyQ.length-1][1]) {  //当前订单数 == Buy最高价的订单数
                    BuyQ.pop();  //Buy最高价被删除
                    order[1] = 0;
                } else if (order[1] < BuyQ[BuyQ.length-1][1]) { //当前订单数 < Buy最高价的订单数
                    let maxBuy = BuyQ.pop(); //更新Buy最高价的订单数量
                    // BuyQ.push([maxBuy[0], maxBuy[1] - order[1]]);
                    addQueue(BuyQ,[maxBuy[0], maxBuy[1] - order[1]],0)
                    order[1] = 0;
                }
            }
            if (order[1] > 0){
                addQueue(SellQ,[order[0], order[1]],1)
            }//当前订单数还有余留，则压入队列中
        }
    })

    let res = 0;
    while (BuyQ.length>0) {
        res = (res + BuyQ.shift()[1]) % 1000000007;
    }
    while (SellQ.length>0) {
        res = (res + SellQ.shift()[1]) % 1000000007;
    }
    return res;
};

function addQueue(arr,node,type){
let temp = node[0];
let insertIndex = 0;
let condition;
for(let i=0;i<arr.length;i++){
    if(type == 0){ // type为0是正序排列
        condition = temp>arr[i][0]
    }else{ // type为1是倒序排列
        condition = temp<arr[i][0]
    }
    if(condition){
        insertIndex = i+1;
    }
}
arr.splice(insertIndex,0,node)
}