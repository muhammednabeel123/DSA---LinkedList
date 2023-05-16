class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedLists {
    constructor(){
        this.head= null
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
            
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            
        }

    }

    append(value){
        const node = new Node(value)
      
        if(this.isEmpty()){
            this.head= node
        }
        else{
            
            let curr = this.head
            while(curr.next){
            curr = curr.next
            }
            curr.next = node
           

        }
        this.size++;
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return null
        }
        if(index === 0){
            this.prepend(value)

        }else{
          const  node = new Node(value)
           let prev = this.head
            for(let i = 0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++;


        }
    }

    remove(index){
    
        if(index < 0 || index > this.size ){
            return null

        }

        if(index === 0){
             let removedList = this.head
            this.head = this.head.next

        }
        else{
            let removedValue = ' '
            let prev = this.head
            for(let i = 0; i<index-1 ; i++){
                prev = prev.next
            }

            removedValue = prev.next
            prev.next  = removedValue.next
           this.size -- 

        }



    }
    removeValue(value){
        
        if(this.isEmpty()){
            return null
        }
        if(this.head.value ===  value ){
            let removedValue = this.head
            this.head = this.head.next
            this.size--
            return

        }else{
            let prev = this.head.next
            
            while(prev.next && prev.next.value != value){
                prev = prev.next

                
            }
            if(prev.next){
                let removedValue = prev.next
                prev.next = removedValue.next
                this.size--
                return value
            }

            return null


        }
         
    }



    print(){
        if(this.isEmpty()){
            console.log("this is empty")
        }else{
            let curr = this.head
            let listValue = " "

            while(curr){
                listValue += `${curr.value} `
                curr = curr.next 
            }
            console.log(listValue,"this ie")
            
        }

    }

}

const list = new LinkedLists()

list.append(40)
list.print()
list.append(30)
list.insert(20,2)
list.removeValue(40)
list.print()