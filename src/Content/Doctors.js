import React, { useEffect } from "react";
import "./Doctors.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../reducer/apiRequest";
import { useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getDoctors = async () => {
      const data = await getAllUsers("Doctor", dispatch);
      setDoctors(data.data.data);
      console.log(">>> check doctorsssssss", doctors);
    };
    getDoctors();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Doctors">
      <div className="title">Bác sĩ nổi bật</div>
      <Slider {...settings}>
        {doctors &&
          doctors.length > 0 &&
          doctors.map((item) => {
            return (
              <div className="doctor" key={item.id}>
                <div className="image">
                  <img alt="ảnh" className="img" src={item.image} />
                </div>
                <div className="title-section">
                  {item.position} {item.fulltName}
                </div>
                <div className="speciality">{item.speciality}</div>
              </div>
            );
          })}
        <div className="section">
          <div className="image">
            <img
              alt="ảnh"
              className="img"
              src="https://cdn.bookingcare.vn/fr/w300/2022/12/29/100333-5-nha-khoa-ha-noi-trong-rang-chuyen-sau-uy-tin-tai-ha-noibookingcare.png"
            />
          </div>
          <div className="title-section">
            Trồng răng an toàn, uy tín tại Hà Nội
          </div>
        </div>
        <div className="section">
          <div className="image">
            <img
              alt="ảnh"
              className="img"
              src="https://cdn.bookingcare.vn/fr/w300/2022/12/29/100333-5-nha-khoa-ha-noi-trong-rang-chuyen-sau-uy-tin-tai-ha-noibookingcare.png"
            />
          </div>
          <div className="title-section">
            Trồng răng an toàn, uy tín tại Hà Nội
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Doctors;
