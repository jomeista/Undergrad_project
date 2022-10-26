import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import {format} from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./Header.css";


const Header = () =>{

  const [openDate, setOpenDate] = useState(false)
//react date range
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date (),
      key: 'selection'
    }
  ]);

  return(
    <div className="header">
    <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon= {faBed} />
        <span>Stays</span>
        </div>

        <div className="headerListItem">
        <FontAwesomeIcon icon= {faBed} />
        <span>Stays</span>
        </div>

        <div className="headerListItem">
        <FontAwesomeIcon icon= {faBed} />
        <span>Stays</span>
        </div>

        <div className="headerListItem">
        <FontAwesomeIcon icon= {faBed} />
        <span>Stays</span>
        </div>

        <div className="headerListItem">
        <FontAwesomeIcon icon= {faBed} />
        <span>Stays</span>
        </div>
      </div>

      <h1 className="headerTitle">Student Housing, home away from home.</h1>
      <p className="headerDesc">Where there are no strangers, just friends you have not met yet.
      </p>
      <button className="headerBtn">Sign In / Register</button>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input 
            type="text"
            placeholder="Where are you staying?"
            className="headerSearchInput"
          />
        </div>

        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span onClick={() =>setOpenDate(!openDate)} className="headerSearchText"> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          { openDate && <DateRange
           editableDateInputs={true}
           onChange={item => setDate([item.selection])}
           moveRangeOnFirstSelection={false}
           ranges={date}
           className="date"

         />}
        </div>

        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
        <span className="headerSearchText">Rooms</span>
        </div>

        <div className="headerSearchItem">
         <button className="headerBtn">Search</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header;