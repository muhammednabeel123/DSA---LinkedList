class Node {
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
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

    }
    else{
        node.next = this.head 
        this.head = node

    }
    this.size++
}
append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }
    else{
       let  prev = this.head
        while(prev.next){
        prev = prev.next
        }
        prev.next = node

    }
    this.size++
}
insert(value,index){
    if(index < 0 || index > this.size){
        return
    }
    if(index === 0 ){
        this.prepend(value)
    }else{

        const node = new Node(value)
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
            console.log(prev.next)
        }
        node.next =  prev.next 
        console.log(node.next)
        prev.next = node
        this.size++;



    }
   

}

remove(index){
    if(index < 0 || index > this.size){
        return null
    }
    let removedList
    if(index === 0 ){
        removedList = this.head
        this.head = this.head.next
    }
    else{
        let prev = this.head
        for(let i = 0;i<index-1;i++){
            prev = prev.next
        }
        removedList = prev.next
        prev.next = removedList.next
    }
    this.size --
    return removedList.value
}

removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value === value){
        console.log( this.head.value +'hello madam')
        this.head = this.head.next
        console.log(this.head.next+"this is main");
        this.size --
        return value
       
    }else{
        let prev
        prev = this.head.next
        while(prev.next && prev.next.value != value){
            prev = prev.next
            console.log("hello")
        }
        if(prev.next){
           const removeNode = prev.next
            prev.next = removeNode.next
            this.size --
            return value
        }
        return null

    }


}

search(value){
    if(this.isEmpty()){
        return null
    }
    let i = 0
    let curr = this.head
    while(curr){
        if(curr.value === value){
            return i
        }
        curr = curr.next
        i++
    }

    return -1

}
reverse(){
    let prev = null
    let curr = this.head
    while(curr){
       let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}



print(){
    if(this.isEmpty()){
        console.log('List is empty')
    }
    else{
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues +=`${curr.value} `
            curr = curr.next
        }

        console.log(listValues+" ")

    }

}

}




const list = new LinkedList()
console.log('list is empty',list.isEmpty() )
console.log('list size ' ,list.getSize() )
list.print()
// list.append(20)
// list.print()
// list.append(10)
// list.append(35)
// list.print()
list.insert(10,0)



list.insert(30,1)

list.insert(40,2)
list.insert(50,3)

// console.log(list.removeValue(50)+"heeua")

list.print()
list.reverse()
list.print()


