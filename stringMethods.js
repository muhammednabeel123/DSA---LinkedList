//string concat
let text1 = "hello"
let text2 ="world"
let result = text1.concat(" ",text2 )
console.log(result)

//string charAt
// console.log(text1.charAt(0))

//charCodeAt 
// console.log(text1.charCodeAt(2))

//endsWith
let text3 = "hello world"


//formCode
// console.log(String.fromCharCode(77))

//localeCompare
let text4 = "Ab"
let text5 = "Ab"

console.log(text4.localeCompare(text5))

//finad all 
function string(target){
let text6 = "banana"
let count = 0

for(let i = 0;i<text6.length;i++){
    console.log(text6[i]);

    if(text6[i] == target.toString() ){
   
        count ++;
      
    }

   
}
return count;
}

//split()

let texts = "hello Worlds"
let myArray = texts.slice(0,5).split().reverse()
let myArray2 = texts.slice(5,11).split()


console.log(myArray)
