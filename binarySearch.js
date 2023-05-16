function BinarySearch(arr,target){
 
    let leftIndex = 0
    let rightIndex  =  arr.length-1 
   

    while(leftIndex <= rightIndex ){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2 )

        console.log( arr[middleIndex],"hey");
        if(target === arr[middleIndex]){
            return middleIndex 
        }
        if(target < arr[middleIndex] ){
            rightIndex = middleIndex -1 
        }
        else
        {
            leftIndex = middleIndex + 1
        }
    }

    return -1

}
console.log(BinarySearch([10,20,30,40,50],20));