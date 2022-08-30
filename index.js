import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "../HOSTELAPP/routes/users.js";
import authRoute from "../HOSTELAPP/routes/auth.js";
import hostelRoute from "../HOSTELAPP/routes/hostel.js";
import roomsRoute from "../HOSTELAPP/routes/rooms.js";


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

//Error handling middleware
app.use((err, req, res, next) =>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
});



app.listen(3000, () =>{
  connect()
  console.log("Server on port 3000 has started!");
});
