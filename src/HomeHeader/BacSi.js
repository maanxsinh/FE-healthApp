import React, { useEffect, useState } from "react";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./BacSi.scss";
import axios from "axios";
import Header from "./header/header";
import { getDetailDoctor } from "../reducer/apiRequest";
import { useDispatch } from "react-redux";

const BacSi = () => {
  const dispatch = useDispatch();
  const [dataDoctor, setDataDoctor] = useState([]);
  useEffect(() => {
    const getBacSi = async () => {
      const data = await axios.get("http://localhost:8080/getInfDoctor");
      console.log(data.data);
      setDataDoctor(data.data);
    };
    getBacSi();
  }, []);
  const navigate = useNavigate();
  const handleBackHomePage = () => {
    navigate("/");
  };
  const selectDotor = async (id) => {
    await getDetailDoctor(id, navigate, dispatch);
    // navigate(`/bacsi/${id}`);
  };

  return (
    <div className="bacsi">
      <Header />
      {dataDoctor &&
        dataDoctor.length > 0 &&
        dataDoctor.map((item) => {
          return (
            <div
              className="list"
              key={item.id}
              id={item.id}
              onClick={() => selectDotor(item.id)}>
              <img
                src={item.image}
                alt="Bac si Nguyen Duy Hung"
                className="avatar"
              />
              <div className="name-chuyenkhoa">
                <div className="name">
                  {item.position} {item.fulltName}
                </div>
                <div className="chuyenkhoa">{item.speciality}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BacSi;
