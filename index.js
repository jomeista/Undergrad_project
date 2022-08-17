import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import hostelRoute from "./routes/hostel.js"
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
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/hostel", hostelRoute);
app.use("/api/rooms", roomsRoute);




app.listen(3000, () =>{
  connect()
  console.log("Server on port 3000 has started!");
});
