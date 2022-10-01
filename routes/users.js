import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router ();

// router.get("/checkauthentication", verifyToken, (req, res, next) =>{
//   res.send("hello user, you are logged in")
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) =>{
//   res.send("hello user, you are logged in")
// });

//ROUTES

router.put("/:id", updateUser) //UPDATE

router.delete("/:id", deleteUser) //DELETE

router.get("/:id", getUser) //GET

router.get("/", getUsers) //GETALL

export default router

