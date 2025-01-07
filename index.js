const express= require ("express");
const helmet= require ("helmet");
const Permissions-Policy = require("permissions-policy");
const app= express();

app.use(helmet());
app.use((req,res,next)=>{
res.setHeader(
    "Permissions-Policy",
    'geolocation=(self), microphone=(), camera(), notifications(self)'
  );
  next();

});

app.get("/",(req,res)=>{
	
	res.json("Hello world!");

});

app.listen(3000,()=>{

console.log("running on PORT 3000");
});