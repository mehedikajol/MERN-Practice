import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://www.facebook.com"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fa-brands fa-facebook-square"></i>
        </a>
        <a
          href="https://www.twitter.com"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fa-brands fa-twitter-square"></i>
        </a>
        <a
          href="https://www.pinterest.com"
          title="Pinterest"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fa-brands fa-pinterest-square"></i>
        </a>
        <a
          href="https://www.instagram.com"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fa-brands fa-instagram-square"></i>
        </a>
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
          <li onClick={handleLogout} className="topListItem">
            {user && "logout"}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link to="/settings" className="link">
            <img
              className="topImg"
              src={PF + user.profilePicture}
              alt="profile"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                login
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
