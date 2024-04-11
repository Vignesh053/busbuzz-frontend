import React from "react";
import "./style/Header.css";
import userIcon from "../assets/user-icon.png";
import logo from "./style/assets/logo.svg";
import trusted from "./style/assets/trusted.svg";
import { useNavigate } from "react-router-dom";

import { isUserLoggedIn } from "./service/userservice";

const Header = () => {
  const navigate = useNavigate();
  const handleProfileIconClick = () => {
    if (isUserLoggedIn()) {
      navigate("/user/profile");
    } else {
      navigate("/login");
    }
  };

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <div id="header">
      <div id="logo-container">
        <img
          id="logo"
          src={logo}
          alt="Logo"
          className="icon"
          onClick={handleLogoClick}
        />
        <p id="mid">|</p>
        <img
          id="trusted"
          src={trusted}
          alt="Profile Icon"
          className="icon"
        />
      </div>

      <img
        id="profile-icon"
        src={userIcon}
        alt="Profile Icon"
        className="icon"
        onClick={handleProfileIconClick}
      />
    </div>
  );
};

export default Header;
