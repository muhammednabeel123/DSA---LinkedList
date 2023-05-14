function linearSearch(arr,target){
  
    for(let i = 0; i < arr.length ; i++ ){
        console.log(arr[i]);
        if(arr[i] === target){
           
            return arr[i]
       
    }



}
return -1
}


console.log(linearSearch([1,10,3,4,5,610,24],10))