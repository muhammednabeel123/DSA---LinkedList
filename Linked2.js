class Node{
    constructor(value){
        this.value = value 
        this.next = null
      
    }
}

class LinkedList {
    constructor(){
        this.size = 0
        this.head = null
        this.tail = null
    }

    isEmpty(){
        return this.size === 0

    }

    prepend(value){

        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
        
            this.head = this.head.next
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node 
        }
        this.size++

    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
    
        
            const value = this.head.value
            this.head = this.head.next
        
        this.size--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
        }
        else{
            let prev = this.head
            while(prev.next != this.tail){
                prev = prev.next
            }
           prev.next = null
           this.tail = prev

        }
        this.size --
    }

    print(){
        console.log("hell");
        let listValues = ''
        let curr = this.head
        while(curr){
            listValues  +=`${curr.value} `
            curr = curr.next 
        }

        console.log(listValues)
    }
}

const list = new LinkedList()

list.prepend(20)
list.append(20)
list.removeFromEnd()
list.print()