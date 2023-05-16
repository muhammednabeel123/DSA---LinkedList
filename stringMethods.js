//string concat
let text1 = "hello"
let text2 ="world"
let result = text1.concat(" ",text2 )
console.log(result)

//string charAt
console.log(text1.charAt(0))

//charCodeAt 
console.log(text1.charCodeAt(2))

//endsWith
let text3 = "hello world"
console.log(text3.endsWith("d"))

//formCode
console.log(String.fromCharCode(77))

//localeCompare
let text4 = "Ab"
let text5 = "Ab"

console.log(text4.localeCompare(text5))