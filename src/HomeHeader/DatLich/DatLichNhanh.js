import React, { useState, useEffect } from "react";
import "./DatLichNhanh.scss";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { getTime } from "../../reducer/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  patientId,
  selectDate,
  selectDoctorId,
  selectDoctorName,
  selectTime,
  statusBook,
} from "../../reducer/bookingSlice";
import { useNavigate } from "react-router-dom";
import { selectClasses } from "@mui/material";

const DatLichNhanh = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [time, setTime] = useState([]);
  const [docInf, setDocInf] = useState({});
  const dispatch = useDispatch();
  const schedule = useSelector((state) => state.dataBook);
  const user = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    const getDoctor = async () => {
      let data = await axios.get("http://localhost:8080/getInfDoctor");
      setDoctors(data.data);
      console.log(data.data);
    };
    const getScheduleTime = async () => {
      let data = await axios.get("http://localhost:8080/getTime");
      setTime(data.data.dataTime);
      // console.log(data.data.dataTime);
    };
    getScheduleTime();
    getDoctor();
    console.log(">>>CHECK USER", user);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);

  const pickDoctor = (e) => {
    let doctorInf = {};
    const doctor = doctors.find((item) => item.fulltName === e.target.value);
    doctorInf = {
      position: doctor.position,
      speciality: doctor.speciality,
      fulltName: doctor.fulltName,
      image: doctor.image,
    };
    // console.log(doctor.id);
    setDocInf(doctorInf);
    console.log(e.target.value);
    dispatch(selectDoctorId(doctor.id));
    // dispatch(selectDoctorName(e.target.value));
  };

  const pickDate = (e) => {
    const date = e.target.value;
    // console.log(e.target.value);
    dispatch(selectDate(date));
    // console.log(schedule);
  };
  const pickTime = (e) => {
    // const timePicked = time.find((item) => item.id === idTime);
    // console.log(timePicked.valueVi);
    const patientID = user?.data.id;
    dispatch(selectTime(e.target.value));
    dispatch(statusBook());
    dispatch(patientId(patientID));
    console.log(schedule);
  };
  const handleClick = async () => {
    if (!schedule.doctorId || !schedule.date || !schedule.timeType) {
      console.log("missing gi do");
    } else {
      console.log("success");
      console.log(">>>Lich kham:", schedule);
      const data = await axios.post("http://localhost:8080/booking", schedule);
      console.log(">>>check data", data);
      setSuccess(true);
    }
  };
  const backHome = () => {
    navigate("/");
  };
  return (
    <div className="DatLich">
      <div className="header">
        <FontAwesomeIcon
          onClick={() => backHome()}
          className="home"
          icon={faHome}></FontAwesomeIcon>
      </div>
      {success === true && (
        <Alert className="alert-success" severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      )}

      <div className="title">ĐẶT LỊCH KHÁM BỆNH</div>
      <div className="doctor">
        <img className="img" alt="bac si" src={docInf.image} />
        <div className="pos-spe">
          <div className="pos">
            {docInf.position} {docInf.fulltName}
          </div>
          <div className="spe">{docInf.speciality}</div>
        </div>
      </div>
      <div className="select-doctor-date">
        <div className="select-doctor">
          <span>Chọn bác sĩ</span>
          <div className="select">
            <select className="cus-select" onChange={(e) => pickDoctor(e)}>
              <option value="0">Select doctor</option>
              {doctors.length > 0 &&
                doctors &&
                doctors.map((item) => {
                  return (
                    <option value={item.fulltName} key={item.id}>
                      {item.fulltName} - {item.speciality}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="select-date">
          <span>Chọn ngày</span>
          <div className="select">
            <input
              onChange={(e) => pickDate(e)}
              className="cus-select"
              type="date"
              id="birthday"
              name="birthday"
            />
          </div>
        </div>
      </div>
      <div className="time">
        <select className="cus-select" onChange={(e) => pickTime(e)}>
          <option value="0">Select time</option>
          {time.length !== 0 &&
            time &&
            time.map((item) => {
              return (
                <option value={item.valueVi} key={item.id}>
                  {item.valueVi}
                </option>
              );
            })}
        </select>
      </div>
      <button className="btn-book" onClick={() => handleClick()}>
        Đặt lịch
      </button>
    </div>
  );
};

export default DatLichNhanh;
