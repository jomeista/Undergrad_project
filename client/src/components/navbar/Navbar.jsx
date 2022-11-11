import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {

  const {user} = useContext(AuthContext);
  return (

    <div className="navbar">
      <div className="navContainer">
        <span className="logo">PeteLiz Hostel</span>
        
       { user ? user.username :( <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
        )}
      </div>
    </div>

  )
}

export default Navbar;
