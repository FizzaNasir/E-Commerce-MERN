const mongoose = require("mongoose")
// const express = require("express")
const app = require("./app")
// const app = express()
async function connect(){
  try{
    await mongoose.connect("mongodb://localhost:27017/ECommerce")
  } catch(error){
    console.log("Error connecting mongo")
  }
}

connect();

app.listen(8000, ()=>{
    console.log("Server started at port 8000")
})