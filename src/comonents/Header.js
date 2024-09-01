import { CDN_LOGO } from "../utils/common";


const Header = () => {
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;