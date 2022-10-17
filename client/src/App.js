import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hostel from "./pages/hostel/Hostel";
function App() {
  return (
     
    //Routes
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hostel" element={<List />}></Route>
        <Route path="/hostel/:id" element={<Hostel />}></Route>
      </Routes>
    </BrowserRouter>
  )
   
}



export default App;
