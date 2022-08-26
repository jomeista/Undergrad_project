import express from "express";
import  { createHostel, deleteHostel, getHostel, getHostels, updateHostel }  from "../controllers/hostel.js";
import Hostel from "../models/Hostel.js";


const router = express.Router ();

//ROUTES
router.post("/", createHostel) //CREATE

router.put("/:id", updateHostel) //UPDATE

router.delete("/:id", deleteHostel) //DELETE

router.get("/:id", getHostel) //GET

router.get("/", getHostels) //GETALL


export default router