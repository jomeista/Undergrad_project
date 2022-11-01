import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { format } from "date-fns";
import './list.css';
import { DateRange } from "react-date-range";


const List = () =>{

  const location = useLocation();

  const [destination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state.options)


  console.log(location);
  return(
    <div><Navbar />
    <Header type="list" />
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Location</label>
           <span placeholder={destination}></span>
          </div>

          <div className="lsItem">
            <label>Check in date</label>
            <span onClick ={() => setOpenDate(!openDate)}>
            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
            { openDate && (
              <DateRange 
              onChange = {item => setDate([item.selection])}
              minDate ={new Date()}
              ranges ={date}
            />)}
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Min price <small>per month</small>
              </span>
              <input type="number" className="lsOptionInput"/>
            </div>

            <div className="lsOptionItem">
              <span className="lsOptionText">
                Max price <small>per month</small>
              </span>
              <input type="number" className="lsOptionInput"/>
            </div>

            <div className="lsOptionItem">
              <span  className="lsOptionText" placeholder={options.room}>
                room
              </span>
              <input min={1} type="number" className="lsOptionInput"/>
            </div>

          </div>
          
          </div>
          <button>Search</button>
        </div>
        <div className="listResult"></div>
      </div>
    </div>
    </div>
  )
}

export default List