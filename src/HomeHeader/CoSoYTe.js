import React from "react";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./CoSoYTe.scss";
import Header from "./header/header";

const CoSoYTe = () => {
  const navigate = useNavigate();
  const handleBackHomePage = () => {
    navigate("/");
  };
  return (
    <div className="benhvien">
      <Header />
      <div className="list">
        <img
          src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg"
          alt="benh vien Huy Nghi Viet Duc"
          className="avatar"
        />
        <div className="name">Bệnh viện Hữu Nghị Việt Đức</div>
      </div>
    </div>
  );
};

export default CoSoYTe;
