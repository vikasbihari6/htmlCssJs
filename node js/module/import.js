console.log("this is importable file");

const mod=require("./export");
console.log(mod);

console.log(mod.avg([2,4,5,9,3]));
