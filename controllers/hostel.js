import Hostel from "../models/Hostel.js";

//CREATE 
export const createHostel = async (req, res, next) =>{
  const newHostel = new Hostel(req.body);
  try {
    const savedHostel = await newHostel.save()
    res.status(200).json(savedHostel)
  }catch(err){
    next(err)
  }

}

//UPDATE
export const updateHostel = async (req, res, next) =>{
  try{
    const updatedHostel = await Hostel.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new: true }     
      ); 
    res.status(200).json(updatedHostel)
  }catch (err){
    next(err)
  }

}

//DELETE
export const deleteHostel = async (req, res, next) =>{
  try{
    await Hostel.findByIdAndDelete(req.params.id)
    res.status(200).json("Hostel has been deleted!")
  }catch (err){
    next(err)
  }

}

//GET
export const getHostel = async (req, res, next) =>{
  try{

    const hostel = await Hostel.findById(req.params.id)
    res.status(200).json(hostel)
  }catch (err){
   next(err)

  } 

}

//GET ALL
export const getHostels = async (req, res, next) =>{
  try{
    const hostels = await Hostel.find()
    res.status(200).json(hostels)

  }catch (err){
    next(err)

  }

}

//GET BY CITY
export const countByCity = async (req, res, next) =>{
  const cities = req.query.cities.split(",")
  try{
    const list = await Promise.all(cities.map(city =>{
      return Hostel.countDocuments({city:city})
    }))
    res.status(200).json(list)

  }catch (err){
    next(err)

  }

}


