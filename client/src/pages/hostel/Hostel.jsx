import React, { useContext } from "react";
import "./hostel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";


const Hostel = () =>{

  const location = useLocation();

  const id = location.pathname.split("/"[2]);




  const {data, loading, error} = useFetch(`/hostels/${id}`);

  const {dates} = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  console.log(dayDifference(dates[0].startDate, dates[0].endDate));


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
     { loading ? ("loading") : ( <div className="hostelContainer">
        <div className="hostelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hostelTitle">{data.name}</h1>
          <div className="hostelAddress">
           <FontAwesomeIcon icon= { faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hostelDistance">
            Excellent location {data.distance} from centre
          </span>
          <span className="hostelPriceHighlight">
            Book a stay over KSH {data.CheapestPrice} at this property and get a free bus ride
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
            <h1 className="hostelTitle">{data.desc}</h1>
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
              <b>KSH {data.CheapestPrice}</b>
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div> 
      </div>
      
    </div>)}
    <MailList />
    <Footer />
    </div>
  )
}

export default Hostel