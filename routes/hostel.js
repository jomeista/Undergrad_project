import express from "express";
import  { countByCity, countByType, createHostel, deleteHostel, getHostel, getHostels, updateHostel }  from "../controllers/hostel.js";
// import Hostel from "../models/Hostel.js";


const router = express.Router ();

//ROUTES
router.post("/", createHostel); //CREATE

router.put("/:id", updateHostel); //UPDATE

router.delete("/:id", deleteHostel); //DELETE

router.get("/find/:id", getHostel); //GET

router.get("/", getHostels); //GETALL

router.get("/", getHostels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType); 

export default router