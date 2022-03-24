import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              about
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contacts" className="link">
              contacts
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              write
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/logout" className="link">
              logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="profile"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
