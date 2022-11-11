import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hostel from "./pages/hostel/Hostel";
import Login from "./pages/login/Login";
function App() {
  return (
     
    //Routes
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hostel" element={<List />}/>
        <Route path="/hostel/:id" element={<Hostel />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
   
}



export default App;
