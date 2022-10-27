import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import {format} from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./Header.css";


const Header = ({type}) =>{

  const [openDate, setOpenDate] = useState(false);

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOPtions] = useState({
    room:1
  });

  const handleOption = (room, operation) =>{
    setOPtions((prev) =>{
      return{
      ...prev,
      [room]: operation ==="i" ? options[room] + 1 : options[room] -1,
    };
    });
  };
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
    <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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

      { type !== "list" &&
        <>
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
        <span onClick={() =>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.room} sharing`}</span>
        { openOptions && <div className="options">
          <div className="optionItem">
            <span className="optiontext">room</span>
            <div className="optionCounter">
              <button disabled={options.room <= 1} className="optionCounterButton" onClick={() =>handleOption("room", "d")}>-</button>
              <span className="optionCounterNum">{options.room}</span>
              <button className="optionCounterButton" onClick={() =>handleOption("room", "i")}>+</button>
            </div>
          </div>
        </div>}
        </div>

        <div className="headerSearchItem">
         <button className="headerBtn">Search</button>
        </div>
      </div></>
    }
      </div>
    </div>
  )
}

export default Header;