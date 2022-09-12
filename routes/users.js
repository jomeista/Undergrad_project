import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";

const router = express.Router ();

//ROUTES

router.put("/:id", updateUser) //UPDATE

router.delete("/:id", deleteUser) //DELETE

router.get("/:id", getUser) //GET

router.get("/", getUsers) //GETALL

export default router

