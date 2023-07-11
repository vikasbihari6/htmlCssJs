const express=require("express");

const app=express();
const port=80;

app.get("/",(req,res)=>{
    res.send("this is my first express app");

})

app.listen(port,()=>{
    console.log(`the application started on the ${port}`);
})