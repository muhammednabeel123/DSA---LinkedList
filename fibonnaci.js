function fibonacci(n){
    const fib = [0,1]
    for(let i=2;i<n;i++){
         console.log(fib[i] +"hekkas")
        fib[i] = fib[i - 1] + fib[i - 2]  
        console.log(fib[i],"hey nsasaabeel")

        
    }
    return fib
}


console.log(fibonacci(4))
//  console.log(fibonacci(5))
// console.log(fibonacci(7))