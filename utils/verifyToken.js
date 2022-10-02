import  jwt from "jsonwebtoken";
import { createError } from "./error.js";

//Verify Authentication

export const verifyToken = (req, res, next) =>{
  //take token from cookies
  const token = req.cookies.access_token;
  if(!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) =>{
    if(err) return next(createError(403, "Token is not valid!"));

    //new request property
    req.user = user;
    next()
  });
};

export const verifyUser = (req, res, next) =>{
  verifyToken(req, res, ()=>{
    if(req.user.id === req.params.id || req.user.isAdmin) {
      next();
    }else{
       if (err) return next(createError(403, "You are not authorised!"));
    }
  });
};