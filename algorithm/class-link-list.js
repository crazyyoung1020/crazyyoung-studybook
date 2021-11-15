

// ListNode


// LinkList

//head
//size

// 1.数组转化成链表
// 2.push
// 3.remove
// 4.replace
// 5.indexOf
// 6.getNode
// 7.addNode


class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkList{
    constructor(arr){
        if( arr === undefined){
            this.head = null
            this.size = 0
        } else if( Array.isArray(arr)){
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
    push(val){
        // 1.找到最后一个节点
        // 2.创建一个新节点
        // 3.让最后一个节点的指针指向新节点

        let lastNode = this.getNode( this.size -1 )
        let node = new ListNode(val)
        lastNode.next = node
        this.size++
    }
    getNode(index){
        // 1.找到头节点
        // 2.依次类推，找到第index个节点

        if(index<0 || index>=this.size){
            console.log('查到位置不在链表长度范围内')
            return
        }
        let cur = this.head
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        return cur
    }
    remove(index){
        // 1.找到要删除元素前面的一个节点
        // 2.把要删除元素的指针给到前面一个节点

        if(index<0 || index >= this.size){
            console.log('删除位置超过链表长度范围')
            return 
        }
        if(index === 0){
            this.head = this.getNode(1)
        }else{
            let pre = this.getNode(index-1)
            pre.next = this.getNode(index).next
        }
        this.size--
    }
    addNode(index, val){
        // 1.创建一个新节点
        // 2.找到第index个节点前面一个节点
        // 3.将前面一个节点的指针指向新节点
        // 4.将新节点的指针指向第index个节点

        if(index<0 || index > this.size){
            console.log('增加位置超过链表长度范围')
            return 
        }
        if(index === 0){
            let node = new ListNode(val)
            let head = this.head
            this.head = node
            node.next = head
        }else{
            let node = new ListNode(val)
            let pre = this.getNode(index - 1)
            node.next = pre.next
            pre.next = node
        }
        this.size++
    }
    replace(index, val){
        // 1.找到第index个节点
        // 2.将它的值替换成val
        if(index<0 || index >= this.size){
            console.log('查找位置超过链表长度范围')
            return 
        }
        let cur = this.getNode(index)
        cur.val = val
    }
    indexOf(val){
        // 1.遍历查找链表，用val比较每一项的值，相等则return对应的下标

        let cur = this.head
        for (let i = 0; i < this.size; i++) {
            if(cur.val === val){
                return i
            }
            cur = cur.next
        }
    }
}


// 1 => 2 => newNode => 3 => 4


let arr = [1,2,3,4]

let l1 = new LinkList(arr)

// let node = l1.getNode(5)
// console.log(node)

// l1.push(6)

// l1.remove(0)
// l1.addNode(2,8)
l1.replace(0,9)
console.log(l1.indexOf(9))
// console.dir(l1,{
//     depth:10
// })