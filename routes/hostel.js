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
//DELETE
//GET
//GET ALL


export default router