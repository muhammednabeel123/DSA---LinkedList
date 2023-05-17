class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0  
    }

    prepend(value){
        const node = new Node(value)

        if(this.size === 0 ){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }

    insert(value,index){
        if(index === 0 ){
            this.head = node

        }
        else{
            let prev = this.head
            for(let i = 0 ;i<index -1;i++ ){
                prev= prev.next
            }
            node.next = prev.next
            prev.next = node
        }

    }

  
}


function binary(arr,target){

    let leftIndex = 0 
    let rightIndex = arr.length-1

    while(leftIndex < rightIndex){
        middleIndex = Math.floor((rightIndex + leftIndex)/2)

        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }
        else {
            leftIndex = middleIndex + 1
        }
    }
    
        
}


function reverse(arr){

    let start = 0
    let end = arr.length -1 

    while(end > start ){

        temp = arr[end]
        arr[end] = arr[start]
        a[start] = temp 
    }
    start++
    end--

}

