import React from "react";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            className="img-logo"
            src="https://img.freepik.com/free-vector/islamic-logo-template_23-2148629151.jpg?size=626&ext=jpg&ga=GA1.1.811533436.1696878738&semt=ais"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <h5 className="linked">Home</h5>
            </Link>
          </li>
          <li>
            <Link to="/Rasul">
              <h5 className="linked"> Prophet</h5>
            </Link>
          </li>
          <li>
            <Link to="/HolyBOOKS">
              <h5 className="linked">Holy Books</h5>
            </Link>
          </li>
          <li>
            <Link to="/Months">
              <h5 className="linked">Months</h5>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h5 className="linked">About</h5>
            </Link>
          </li>
          <Link to="/">
            <BsFillHouseFill className="toggle" />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


