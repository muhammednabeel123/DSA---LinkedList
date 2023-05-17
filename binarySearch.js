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


// function Binary(arr,index){
//     let leftIndex = 0 
//     let rightIndex = arr.length-1
//     while(leftIndex <= rightIndex ){
//         middleIndex = Math.floor((leftIndex + rightIndex)/2)

//         if(arr[middleIndex] === index ){
//             return middleIndex
//         }
//         if(index < arr[middleIndex]  ){
//             rightIndex = middleIndex -1 
//         }
//         else{
//             leftIndex = middleIndex + 1
//         }
//     }
//     return - 1
// }
// console.log(Binary([10,20,30,40,50],30));


// function recursiveBinarySearch(arr, target) {
//       return search(arr, target, 0, arr.length - 1);
// }


//     function search(arr, target, leftIndex, rightIndex) {
//         if (leftIndex > rightIndex) {
//           return -1;
//         }
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(arr[middleIndex] ===  target ){
//             return middleIndex
//         }
//           if (target < arr[middleIndex]) {
//             return search(arr, target, leftIndex, middleIndex - 1);
//           } else {
//             return search(arr, target, middleIndex + 1, rightIndex);
//           }

//     }

//     console.log(recursiveBinarySearch([10,20,30,40,50],20))


function BinarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length-1
    
    while(rightIndex >= leftIndex ){
        middleIndex = Math.floor((rightIndex + leftIndex)/2)

        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }
        else{
            leftIndex = middleIndex + 1
        }
    }
    return -1

}
console.log(BinarySearch([10,20,30,40,50],0))
 

// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length -1 )
// }

// function search(arr,target,leftIndex,rightIndex){

//     if(leftIndex > rightIndex ){
//         return - 1
//     }

//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)

//     if(arr[middleIndex] === target ){
//         return middleIndex
//     }
//     if(target < arr[middleIndex] ){
//         return search(arr,target,leftIndex,middleIndex -1)
//     }
//     else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }

// }
// console.log(recursiveBinarySearch([10,20,30,40,50],20))


// function factorial(n){
//     if(n<=1){
//         return 1
//     }

//     return n*factorial(n-1)
// }

// console.log(factorial(5));


function fibonnaci(n){
    if(n<=1){
        return n
    }

    return fibonnaci(n-1) +  fibonnaci(n-2)
}


 console.log(fibonnaci(3));

