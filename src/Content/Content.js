import React from "react";
import "./Content.scss";
import ggplay from "../img/ggplay.png";
import appstore from "../img/app.png";
import Sections from "./Sections";
import axios from "axios";
import CamNang from "./CamNang";
import { useState } from "react";
import Doctors from "./Doctors";
import NewService from "./NewService";
import Media from "./Media";

const Content = () => {
  const getBacsi = async () => {
    let Bacsi = await axios.get("http://localhost:8080/getBacSi");
    console.log(Bacsi.data);
  };
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="content">
      <div className="title">
        <div className="title1">NỀN TẢNG Y TẾ</div>
        <div className="title1">CHĂM SÓC SỨC KHOẺ TOÀN DIỆN</div>
      </div>
      <div className="download">
        <div className="img1">
          <img
            src={ggplay}
            alt="Girl in a jacket"
            style={{ width: "130px", height: "58px" }}
          />
        </div>
        <div className="img2">
          <img
            src={appstore}
            alt="Girl in a jacket"
            style={{ width: "185px", height: "80px" }}
          />
        </div>
      </div>
      <div className="section">
        <Sections />
      </div>
      <div className="camNang">
        <CamNang />
      </div>
      <div className="Doctors">
        <Doctors />
      </div>
      <div className="NewService">
        <NewService />
      </div>
      <div className="Media">
        <Media />
      </div>
    </div>
  );
};

export default Content;
