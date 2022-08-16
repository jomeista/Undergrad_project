const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
    
  } catch (error) {
    throw error
  }
};


app.listen(3000, () =>{
  connect()
  console.log("Server on port 3000 has started!");
});
