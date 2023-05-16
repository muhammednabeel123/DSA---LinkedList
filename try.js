const str = 'binarysearch';
let mystr = '';
for(let i=0;i<str.length;i++){
    mystr+=String.fromCharCode(str.charCodeAt(i)-32)
}
console.log(mystr);
