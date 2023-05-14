class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null

    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
         }
         else{
            node.next = this.head
            this.head.prev = node
            this.head = node 
         }
         this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
            this.tail = node 
        }else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("this is empty")
        }
        else{
            let curr = this.head
            console.log(curr)
            let listValues = ' '
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)

        }
    }
}

const doubleLink = new  DoublyLinkedList()

doubleLink.append(0)
doubleLink.print()
doubleLink.append(32)
doubleLink.print()
