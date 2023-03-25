import React from "react";
import "./CamNang.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CamNang = () => {
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
    <div className="CamNang">
      <div className="title">Cẩm Nang</div>
      <Slider {...settings}>
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
              className="img"
              src="https://cdn.tgdd.vn/2021/01/content/3-800x500-15.jpg"
              style={{ height: "157px", width: "300px" }}
            />
          </div>
          <div className="title-section">8 thực phẩm siêu tốt cho sức khoẻ</div>
        </div>
        <div className="section">
          <div className="image">
            <img
              className="img"
              src="https://nld.mediacdn.vn/k:thumb_w/540/2016/1-3520-1462295419808/nguyen-tac-co-ban-de-song-lau-song-khoe.jpg"
              style={{ height: "157px", width: "300px" }}
            />
          </div>
          <div className="title-section">
            Giảm nguy cơ ung thư: Thay đổi lối sống
          </div>
        </div>
        <div className="section">
          <div className="image">
            <img
              className="img"
              src="https://cdn.bookingcare.vn/fr/w300/2022/12/29/100333-5-nha-khoa-ha-noi-trong-rang-chuyen-sau-uy-tin-tai-ha-noibookingcare.png"
            />
          </div>
          <div className="title-section">4</div>
        </div>
        <div className="section">
          <div className="image">
            <img
              className="img"
              src="https://cdn.bookingcare.vn/fr/w300/2022/12/29/100333-5-nha-khoa-ha-noi-trong-rang-chuyen-sau-uy-tin-tai-ha-noibookingcare.png"
            />
          </div>
          <div className="title-section">5</div>
        </div>
        <div className="section">
          <div className="image">
            <img
              className="img"
              src="https://cdn.bookingcare.vn/fr/w300/2022/12/29/100333-5-nha-khoa-ha-noi-trong-rang-chuyen-sau-uy-tin-tai-ha-noibookingcare.png"
            />
          </div>
          <div className="title-section">6</div>
        </div>
      </Slider>
    </div>
  );
};

export default CamNang;
