/**
 * 链表数据结构
 */

// 1.generateList
// 2.pop
// 3.addNode
// 4.remove
// 5.indexOf 根据值找到节点下表
// 6.getNode 根据下表找到对应节点
// 7.replace 

class ListNode{
    constructor(val){
        this.val = val || null
        this.next = null
    }
}


class LinkList{
    constructor(arr){
        if(arr === undefined ){
            this.head = null
            this.size = 0
        }else if( Array.isArray(arr) ){
            this.head = null
            this.size = arr.length
            this.generateList(arr)
        }
    }
    generateList(arr){
        let current = new ListNode(arr[0])
        this.head = current
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i])
            current = current.next
        }
    }
    pop(val){
        if(this.size === 0){
            this.head = new ListNode(val)
        }else{
            let lastNode = this.getNode(this.size - 1)
            lastNode.next = new ListNode(val)
        }
        this.size++
    }
    getNode(index){
        if(index <0 || index >= this.size){
            console.log('获取节点位置超过链表长度')
            return 
        }
        let cur = this.head
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        return cur
    }
    addNode(index, val){
        if(index <0 || index > this.size){
            console.log('插入位置不在链表长度范围内')
            return 
        }
        if(index === 0){
            let head = this.head
            let node = new ListNode(val)
            this.head = node
            node.next = head
        }else{
            let cur = this.getNode(index - 1)
            let node = new ListNode(val)
            node.next = cur.next
            cur.next = node
        }
        this.size++
    }
    remove(index){
        if(index <0 || index >= this.size) {
            console.log('删除位置超过链表长度')
            return 
        }
        if(index === 0){
            this.head = this.getNode(index + 1)
        }else{
            let pre = this.getNode(index - 1)
            pre.next = this.getNode(index + 1)
        }
        this.size--
    }
    indexOf(val){
        if(index <0 || index >= this.size) {
            console.log('查找位置超过链表长度')
            return 
        }
        let cur = this.head
        for (let i = 0; i < this.size; i++) {
            if(val === cur.val){
                return i
            }
            cur = cur.next
        }
    }
    replace(index,val){
        if(index <0 || index >= this.size) {
            console.log('替换位置超过链表长度')
            return 
        }
        let cur = this.getNode(index)
        cur.val = val
    }
}

let arr = [1,2,3,4]

// 1 => 2 => 3  => 4 => 3

// this.head.next.next.next

let l1 = new LinkList(arr)

// console.log(l1)
// console.dir(l1,{
//     depth:10
// })

// let node2 = l1.getNode(4)

// console.log(node2)

// l1.pop(6)
l1.addNode(0,7)
l1.remove(2)

console.dir(l1,{
    depth:10
})
// let index = l1.indexOf(3)

// console.log(index)

l1.replace(0,9)

console.dir(l1,{
    depth:10
})