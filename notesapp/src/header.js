import React from "react";
import { Link } from "react-router-dom";
import sa from "../src/images/sa.jpg";

function Header() {
  return (
    <>
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <img className="image" src={sa} alt="" />
            </li>
            <li className="nav-item">
              <Link className="text" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
