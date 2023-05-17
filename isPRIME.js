// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(i=2 ;i<n ;i++){
//         if(n%i === 0){
//             return false
//         }
//          return true
//     }

// }

// console.log(isPrime(4))


function isPrime(num){
    if(num < 2){
        return false
    }
    for(let i = 2 ;i<num ;i++){
        if(num%i === 0){
            return false
        }
            
        


    }
    return true
}

function reverseArray(arr){
    let start = 0
    let end = arr.length -1
    while(end>start){

        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start ++ 
        end --
    }
    return arr;
}

function isPalidrome(arr){
    let start = 0 
    let end = arr.length -1 
    if(arr[start] !== arr[end]){
      return false  
    }
     start++
     end--
     return true
}

 console.log(isPalidrome('india'))



