import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperty/FeaturedProperties";


const Home = () =>{
  return (
    <div>
    <Navbar />
    <Header />
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Browse by room type</h1>
      <PropertyList />
      <h1 className="homeTitle">Hostels guests love</h1>
      <FeaturedProperties />
    </div>
   
    </div>
  
  );
};

export default Home;