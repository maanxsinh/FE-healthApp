import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-1">
        <div className="logo">
          <img src="../public/logoHealthGlobal.png" alt="image" />
        </div>
        <div className="text-1">Công ty Cổ phần Công nghệ HealthGlobal</div>
        <div className="text-2">
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          37 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
        </div>
        <div className="text-3">
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
        </div>
      </div>
      <div className="footer-2">
        <div className="text">Liên hệ hợp tác</div>
        <div className="text">Tuyển dụng</div>
        <div className="text">Câu hỏi thường gặp</div>
        <div className="text">Điều khoản sử dụng</div>
        <div className="text">Chính sách bảo mật</div>
      </div>
      <div className="footer-3">
        <div className="text">
          <div className="titles">Trụ sở tại Hà Nội</div>
          <div className="des">37 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</div>
        </div>
        <div className="text">
          <div className="titles">Văn phòng tại Hà Nội</div>
          <div className="des">37 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</div>
        </div>
        <div className="text">
          <div className="titles">Hỗ trợ khách hàng</div>
          <div className="des">support@healthglobal.vn</div>
        </div>
      </div>
      <div className="footer-4"></div>
    </div>
  );
};

export default Footer;
