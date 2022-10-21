import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed} from "@fortawesome/free-solid-svg-icons"
import "./Header.css";

const Header = () =>{
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
      </div>
    </div>
  )
}

export default Header;