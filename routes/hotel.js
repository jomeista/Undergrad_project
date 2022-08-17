import express from "express";

const router = express.Router ();

router.get("/hotel", (req, res) =>{
  res.send("Hello, this is hotel endpoint");

});


export default router