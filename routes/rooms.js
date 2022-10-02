import express from "express";
import {updateRoom, deleteRoom, getRoom, getRooms, createRoom} from "../controllers/room.js";

const router = express.Router ();

router.post("/:hostelid", createRoom) //CREATE

router.put("/:id", updateRoom) //UPDATE

router.delete("/:id/:hostelid", deleteRoom) //DELETE

router.get("/:id", getRoom) //GET

router.get("/", getRooms) //GETALL

export default router