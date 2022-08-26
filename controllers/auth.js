import User from "../models/user.js";
import bcrypt from "bcrypt";

//REGISTER
export const register = async (req, res, next) =>{
try {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  })

  await newUser.save()
  res.status(200).send("User has been created Successfully");
  
} catch (err) {
  next(err)
}

}

//LOGIN
export const login = async (req, res, next) =>{
  try {
  
   const user = await User.findOne({ username: req.body.username});
   if(!user) return next(createError(404, "User not found!"));

   const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
   );
   if(!isPasswordCorrect) return next(createError(404, "Wrong username or password!"));

   res.status(200).json(user);
 
  } catch (err) {
    next(err)
  }
  
  };