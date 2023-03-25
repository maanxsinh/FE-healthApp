import React from "react";
import "./Sections.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Sections = () => {
  return (
    <div className="sections">
      <div className="section section1">
        <FontAwesomeIcon icon={faHospital}></FontAwesomeIcon>
        <div className="text-section">
          Khám <br /> chuyên khoa
        </div>
      </div>
      <div className="section section2">
        <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
        <div className="text-section">Khám từ xa</div>
      </div>
      <div className="section section3">
        <FontAwesomeIcon icon={faHospital}></FontAwesomeIcon>
        <div className="text-section">Sức khoẻ tinh thần</div>
      </div>
      <div className="section section4">
        <FontAwesomeIcon icon={faHospital}></FontAwesomeIcon>
        <div className="text-section">Sản phẩm y tế</div>
      </div>
    </div>
  );
};

export default Sections;
