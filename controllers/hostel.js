import Hostel from "../models/Hostel.js";
import Room from "../models/Room.js";

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
  const {min, max, ...others} = req.query;
  try{
    const hostels = await Hostel.find({...others, CheapestPrice: { $gt: min | 1, $lt:max || 999},});
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

//GET BY TYPE
export const countByType = async (req, res, next) =>{
  try{
  const singleBedCount = await Hostel.countDocuments({type:"Single bed"});
  const doubleBedCount = await Hostel.countDocuments({type:"Double bed"});
  const doubleDeckerCount = await Hostel.countDocuments({type:"Double decker"});
  const double_DeckerCount = await Hostel.countDocuments({type:"3 Double decker"});

    res.status(200).json([
      {type: "Single bed", count: singleBedCount},
      {type: "Double bed ", count: doubleBedCount},
      {type: "Double decker", count: doubleDeckerCount},
      {type: "3 Double decker", count: double_DeckerCount},
    ]);

  }catch (err){
    next(err)

  }

}

export const getHostelRooms = async (req, res, next) =>{
  try {
    const hostel = await Hostel.findById(req.params.id);
    const list = await Promise.all(
      
      hostel.rooms.map((room)=>{
        return Room.findById(room);
      })

    );
    res.status(200).json(list)
  } catch (err) {
    next(err)
  }
}
