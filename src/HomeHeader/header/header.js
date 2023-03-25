import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleBackHomePage = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="back-icon"
        onClick={() => handleBackHomePage()}></FontAwesomeIcon>
      <div className="input-border">
        <input type="text" placeholder="Tìm kiếm" className="input" />
      </div>
    </div>
  );
};

export default Header;
