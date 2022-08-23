import express from "express";
import Hostel from "../models/Hostel.js";


const router = express.Router ();

//CREATE 
router.post("/", async (req, res) =>{

  const newHostel = new Hostel(req.body)
  try {
    const savedHostel = await newHostel.save()
    res.status(200).json(savedHostel)
  }catch(err){
    res.status(500).json(err)
  }
});


//UPDATE 

router.put("/:id", async (req, res) =>{
   
  try{
    const updatedHostel = await Hostel.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new: true }     
      ); 
    res.status(200).json(updatedHostel)
  }catch (err){
    res.status(500).json(err)
  }
})


//DELETE

router.delete("/:id", async (req, res) =>{
  try{
    await Hostel.findByIdAndDelete(req.params.id)
    res.status(200).json("Hostel has been deleted!")
  }catch (err){
    res.status(500).json(err)
  }
});


//GET

router.get("/:id", async (req, res) =>{
  try{

    const hostel = await Hostel.findById(req.params.id)
    res.status(200).json(hostel)
  }catch (err){
    res.status(500).json(err)

  } 
});

//GET ALL

router.get("/", async (req, res, next) =>{
  try{
    const hostels = await Hostel.find()
    res.status(200).json(hostels)

  }catch (err){
    next(err)

  }
});


export default router