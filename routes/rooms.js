import express from "express";
import {updateRoom, deleteRoom, getRoom, getRooms, createRoom, updateRoomAvailability} from "../controllers/room.js";

const router = express.Router ();

router.post("/:hostelid", createRoom); //CREATE

router.put("/:id", updateRoom); //UPDATE
router.put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hostelid", deleteRoom); //DELETE

router.get("/:id", getRoom); //GET

router.get("/", getRooms); //GETALL

export default router;