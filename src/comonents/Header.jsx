import { useState } from "react";
import { CDN_LOGO } from "../utils/common";
import { Link } from "react-router-dom";


const Header = () => {

 const [btnName, setBtnName] = useState("Login")

    return (
      <div className="Header-container">
        <div className="logo">
          <img
            className="app-logo"
            src={CDN_LOGO}
            alt="app-logo"
          />
        </div>
        <div className="nav-container">
          <ul className="nav-items">
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/About'>About Us</Link></li>
            <li> <Link to='/contact'>Contact Us</Link></li>
            <li> <Link to='/cart'>Cart</Link></li>
            <button className="login-btn" onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;