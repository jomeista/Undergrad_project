import express from "express";

const router = express.Router ();

router.get("/auth", (req, res) =>{
  res.send("Hello, this is userAuth endpoint");

});

export default router