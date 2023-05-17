function fibonacci(n){
    const fib = [0,1]
    for(let i=2;i<n;i++){
         console.log(fib[i] +"hekkas")
        fib[i] = fib[i - 1] + fib[i - 2]  
        console.log(fib[i],"hey nsasaabeel")

        
    }
    return fib
}


//  console.log(fibonacci(5))
// console.log(fibonacci(7))

function fib(value){
  let fibo = [0,1]
  for(let i=2;i<value;i++){
    fibo[i] = fibo[i - 1 ] + fibo[i - 2]

  }
  return fibo

}



//febo recursion

function refib(value){
    if(value < 2 ){
        return value
    }
    else {
        return refib(value-1) + refib(value-2) 
    }
}




function factorial(x){
    if(x <=0 ){
        return 1
    }
    return x*factorial(x-1)
}
// console.log(factorial(5))

//without recursion 




function fibonacci(n){
    let fibo = [0,1]
    for(let i=2;i<n;i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo
}

function factorial(n){
    let result = 1
    for(let i = 2 ;i<=n;i++){
        result = result * i
    }
    return result
}

console.log(factorial(5))