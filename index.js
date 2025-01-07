const express= require ("express");
const helmet= require ("helmet");
const app= express();

app.get("/",(req,res)=>{
	
	res.json("Hello world!");

});

app.listen(3000,()=>{

console.log("running on PORT 3000");
});