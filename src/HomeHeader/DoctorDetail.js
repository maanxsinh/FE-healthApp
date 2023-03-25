import React from "react";
import {
  faCircleArrowLeft,
  faHouse,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./DoctorDetail.scss";
import { useEffect } from "react";
import { getDetailDoctor } from "../reducer/apiRequest";
import { useSelector } from "react-redux";
import { useState } from "react";

const DoctorDetail = () => {
  const [title, setTitle] = useState("");
  const doctorInf = useSelector((state) => state.detailDoctor);
  const navigate = useNavigate();
  const handleBackDoctorSearch = () => {
    navigate("/bacsi");
  };
  useEffect(() => {
    const getDetail = async () => {
      let data = await getDetailDoctor(3, navigate);
    };
    const pos = doctorInf.data[0].User.position;
    const name = doctorInf.data[0].User.fulltName;
    setTitle(`${pos} ${name}`);
    console.log(">>>check title", title);
    console.log(doctorInf);
  }, []);
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="header">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="back-icon"
          onClick={() => handleBackDoctorSearch()}></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faHouse}
          className="home-icon"
          onClick={() => handleBackHome()}></FontAwesomeIcon>
        <div className="title">{title}</div>
      </div>
      <div className="mainPage">
        <div className="doctor-detail">
          <img
            src={doctorInf.data[0].User.image}
            alt="Bac si Nguyen Duy Hung"
            className="avatar"
          />
          <div className="pos-des">
            <div className="pos">{title}</div>
            <div className="des">
              <div
                contentEditable="false"
                dangerouslySetInnerHTML={{
                  __html: doctorInf.data[0].description,
                }}></div>
            </div>
            <div
              className="address"
              contentEditable="false"
              dangerouslySetInnerHTML={{
                __html: doctorInf.data[0].address,
              }}></div>
          </div>
        </div>
      </div>

      <div className="detail">
        <div className="pos-name">
          {title}
          <div
            contentEditable="false"
            dangerouslySetInnerHTML={{
              __html: doctorInf.data[0].detail,
            }}></div>
        </div>
        <div className="cure">
          Khám và điều trị
          <div
            contentEditable="false"
            dangerouslySetInnerHTML={{ __html: doctorInf.data[0].cure }}></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
