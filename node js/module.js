const fs=require("fs");
let text=fs.readFileSync("01javascript.txt","utf-8");
console.log(text);

text=text.replace('this','it');
console.log(text);

console.log('creating new file...');
fs.writeFileSync("vikas.txt",text);
