const port=process.env.PORT ||8000 
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('This First Host in Heroku');
})
app.listen(port,()=>{
    console.log("server is running ",port)
})