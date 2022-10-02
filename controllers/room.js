import Room from "../models/Room.js";
import { createError } from "../utils/error.js";
import Hostel from "../models/Hostel.js";

export const createRoom = async (req, res, next) =>{

  const hostelId = req.params.hostelid;
  const newRoom = new Room(req.body)

  try {
    const savedRoom = await newRoom.save()
    try {
      await Room.findByIdAndUpdate(hostelId, {
        $push : {rooms: savedRoom._id},
      });
    } catch (err) {
      next(err)
      
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err)
  }
};

//UPDATE
export const updateRoom = async (req, res, next) =>{
  try{
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new: true }     
      ); 
    res.status(200).json(updateRoom)
  }catch (err){
    next(err)
  }

}

//DELETE
export const deleteRoom = async (req, res, next) =>{
  try{
    await Room.findByIdAndDelete(req.params.id)
    res.status(200).json("Room has been deleted!")
  }catch (err){
    next(err)
  }

}

//GET
export const getRoom = async (req, res, next) =>{
  try{

    const room = await Room.findById(req.params.id)
    res.status(200).json(room)
  }catch (err){
   next(err)

  } 

}

//GET ALL
export const getRooms = async (req, res, next) =>{
  try{
    const rooms = await Room.find()
    res.status(200).json(rooms)

  }catch (err){
    next(err)

  }

}



