import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import hotelRoute from "./routes/hotel.js"
import roomsRoute from "./routes/rooms.js"

const app = express();
dotenv.config();

//Initial MongoDB connection 
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
    
  } catch (error) {
    throw error
  }
};

//middleware
app.use("/api", userRoute)


app.listen(3000, () =>{
  connect()
  console.log("Server on port 3000 has started!");
});
