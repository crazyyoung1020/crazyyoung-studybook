
/**
 * 链表节点构造函数
 */
function ListNode(val){
    this.val = val
    this.next = null
}

/**
 * 实现一个数组转链表的方法
 */
function generatelist(array){
    let fakeHead = new ListNode()
    let curr = fakeHead
    for (let i = 0; i < array.length; i++) {
        curr.next = new ListNode(array[i]) 
        curr = curr.next
    }
    return fakeHead.next
}


/**
 * 实现一个链表转数组的方法
 */

function generateArray(list){
    let arr = [];
    while(list){
        arr.push(list.val)
        list = list.next
    }
    return arr
}


let a1 = [1,2,3,4,5,6,7]
let a2 = [2,3,4]

let l1 = generatelist(a1)
let l2 = generatelist(a2)
// console.dir 传参depth，可以指定展开层数
console.log('l1')
console.dir(l1,{
    depth:100
})
console.log('l2',l2)

let c1 = generateArray(l1)
let c2 = generateArray(l2)
// console.log('c1',c1)
// console.log('c2',c2)
