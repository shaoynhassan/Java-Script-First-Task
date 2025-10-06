let x = "T"

// let y =(x>='A' && x<='Z'|| x>='a' && x<='z')?"Uppercase":"Lowercase";
// console.log(y);

let y =(x>='A' && x<='Z')?"Uppercase":(x>='a' && x<='z')?"Lowercase":"This is not alphabet";
console.log(y);