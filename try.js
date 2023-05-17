const str = 'binarysearch';
let mystr = '';
for(let i=0;i<str.length;i++){
    mystr+=String.fromCharCode(str.charCodeAt(i)+3)
}
console.log(mystr);


//factorial 

function factorial(value){
    if(value === 0 ){
        return 1
    }
    return value * factorial(value-1)
}

console.log(factorial(5))

//fibonnaci

function fibonnaci(value){
    if(value <= 1){
        return value
    }
    return fibonnaci(value-1) + fibonnaci(value-2)
}
console.log(fibonnaci(5))

