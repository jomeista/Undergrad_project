import React from "react";
import "./hostel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const Hostel = () =>{
  const photos = [
    {src:"https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg"},

    {src:"https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg"},

    {src:"https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg"},

    {src:"https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg"},

    {src:"https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg"},

    {src:"https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg"},
  ];
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hostelContainer">
        <div className="hostelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hostelTitle">Grand Hostel</h1>
          <div className="hostelAddress">
           <FontAwesomeIcon icon= { faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hostelDistance">
            Excellent location 500m from centre
          </span>
          <span className="hostelPriceHighlight">
            Book a stay over KSH10,000 at this property and get a free bus ride
          </span>
          <div className="hostelImages">
          {photos.map(photo =>(
            <div className="hostelImgWrapper">
            <img src={photo.src} alt="" className="hostelImg"/>

            </div>
          ))}

          
        </div>
        <div className="hostelDetails">
          <div className="hostelDetailsTexts">
            <h1 className="hostelTitle">Stay in the heart of CBD</h1>
            <p className="hostelDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae. Consectetur a erat nam at. Eu nisl nunc mi ipsum faucibus vitae aliquet. Eu sem integer vitae justo eget magna fermentum. At tellus at urna condimentum mattis pellentesque id nibh. Diam maecenas sed enim ut sem viverra aliquet. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nibh tellus molestie nunc non blandit massa enim nec dui. Cursus vitae congue mauris rhoncus. Duis ultricies lacus sed turpis tincidunt id aliquet. Ut diam quam nulla porttitor massa id. Volutpat ac tincidunt vitae semper quis lectus nulla. Phasellus faucibus scelerisque eleifend donec.
            </p>
          </div>
          <div className="hostelDetailsPrice">
            <h1>Perfect for a semester stay!</h1>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <h2>
              <b>KSH 10,000</b>
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div> 
      </div>
      
    </div>
    <MailList />
    <Footer />
    </div>
  )
}

export default Hostel