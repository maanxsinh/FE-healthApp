import React, { useEffect } from "react";
import "./HomeHeader.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../reducer/userSlice.js";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import {
  getAppointment,
  logoutUser,
  confirmAppointment,
} from "../reducer/apiRequest";
import axios from "axios";
import AdminMenu from "./menu/AdminMenu.js";

const HomeHeader = () => {
  const [confirm, setConfirm] = useState("CONFIRMED");
  const [newNoti, setNewNoti] = useState("NEW");
  const [apm, setApm] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmAll, setConfirmAll] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
  const [doctorId, setDoctorId] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.login.currentUser);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setDoctorId(user?.data.id);
    let infUser = {
      id: user?.data.id,
      name: user?.data.fulltName,
      role: user?.data.typeRole,
      token: user?.accessToken,
    };
    // localStorage.setItem("infUser", infUser);
    localStorage.setItem("infUser", JSON.stringify(infUser));
    localStorage.setItem("isLogin", "true");
    console.log(">>>Check doctorId", doctorId);
    const nguoiDung = localStorage.getItem("infUser");
    console.log(">>>CHECK NGUOI DUNG", JSON.parse(nguoiDung));
    console.log(">>>Check typeRole", user?.data.typeRole);
  }, []);

  const handleLogout = async () => {
    const accessToken = user.accessToken;
    await logoutUser(accessToken, dispatch, navigate);
  };
  const handleLogin = () => {
    navigate("/userLogin");
  };
  const handleGetAppointment = async () => {
    setOpenNoti(true);
    setNewNoti("NEW-active");
    setConfirm("CONFIRMED");
    const data = await getAppointment(doctorId, "NEW");
    // console.log(">>>check dataaaaaaaaaa", data);
    setApm(data.data.appointment);
    console.log(">>>check apm", apm);
  };
  const getConfirmedApm = async () => {
    setConfirm("CONFIRMED-active");
    setNewNoti("NEW");
    const data = await getAppointment(doctorId, "CONFIRMED");
    setApm(data.data.appointment);
  };
  const closeNoti = () => {
    setOpenNoti(false);
  };
  const manageUser = () => {
    navigate("/manage-user");
  };
  const handleConfirmApm = async () => {
    console.log(user.data.id);
    await confirmAppointment(doctorId);
    setConfirmAll(true);
  };

  const handleBooking = () => {
    navigate("/datlichnhanh");
  };
  return (
    <div className="Header">
      <div className="menu">
        {open === true ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              {user.data.typeRole === "Admin" && (
                <div className="action" onClick={() => manageUser()}>
                  QUẢN LÝ NGƯỜI DÙNG
                </div>
              )}
              {user.data.typeRole === "Patient" && (
                <>
                  <div className="action" onClick={() => handleBooking()}>
                    ĐẶT LỊCH KHÁM BỆNH
                  </div>
                  <div className="action">CHỈNH SỬA THÔNG TIN</div>
                </>
              )}
              {user.data.typeRole === "Doctor" && (
                <div className="action">CHỈNH SỬA THÔNG TIN</div>
              )}
              {user.data.typeRole === undefined && (
                <div className="action">CHỈNH SỬA THÔNG TIN</div>
              )}
            </Box>
          </Modal>
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", fontSize: "30px" }}
            onClick={() => handleOpen()}></FontAwesomeIcon>
        )}
      </div>
      <div className="section">
        <div
          className="text"
          onClick={() => navigate("/cosoyte")}
          style={{ cursor: "pointer" }}>
          Cơ sở y tế
          <p className="mota">Chọn bệnh viện phòng khám</p>
        </div>
      </div>
      <div className="section">
        <div
          className="text"
          onClick={() => navigate("/chuyenkhoa")}
          style={{ cursor: "pointer" }}>
          Chuyên khoa
          <p className="mota">Tìm bác sĩ theo chuyên khoa</p>
        </div>
      </div>
      <div className="section">
        <div
          className="text"
          onClick={() => navigate("/bacsi")}
          style={{ cursor: "pointer" }}>
          Bác sĩ
          <p className="mota">Chọn bác sĩ giỏi</p>
        </div>
      </div>
      <div className="input">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon"></FontAwesomeIcon>
        <input
          className="search"
          type="text"
          placeholder="Tìm kiếm cơ sở y tế, bác sĩ,..."
        />
      </div>
      {!user ? (
        <div className="login" onClick={() => handleLogin()}>
          Đăng nhập
        </div>
      ) : (
        <div className="hello-user">
          Xin chào {user?.data.fulltName}{" "}
          <FontAwesomeIcon
            onClick={() => handleGetAppointment()}
            icon={faBell}
            style={{ color: "white", fontSize: "20px", marginLeft: "5px" }}
            title="Thông báo"></FontAwesomeIcon>
          {openNoti === true && (
            <div className="notifications">
              <div className="routes">
                <div className={newNoti} onClick={() => handleGetAppointment()}>
                  MỚI
                </div>
                <div className={confirm} onClick={() => getConfirmedApm()}>
                  ĐÃ XÁC NHẬN
                </div>
                <div className="CLOSE">
                  <FontAwesomeIcon
                    onClick={() => closeNoti()}
                    icon={faCircleXmark}></FontAwesomeIcon>
                </div>
              </div>
              <div className="confirm-btn">
                {newNoti === "NEW-active" && (
                  <button onClick={() => handleConfirmApm()}>
                    Xác nhận tất cả
                  </button>
                )}
              </div>

              {apm &&
                apm.length > 0 &&
                apm.map((item) => {
                  return confirmAll === true && newNoti === "NEW-active" ? (
                    <div>Đã xác nhận</div>
                  ) : (
                    <div className="noti">
                      {item.User.fulltName} đã đặt lịch khám lúc {item.timeType}{" "}
                      vào {item.date}
                    </div>
                  );
                })}
            </div>
          )}
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ color: "white", fontSize: "20px", marginLeft: "15px" }}
            title="Đăng xuất"
            onClick={() => handleLogout()}></FontAwesomeIcon>
        </div>
      )}
      <div className="section">
        <FontAwesomeIcon
          icon={faCircleQuestion}
          style={{
            color: "white",
            fontSize: "15px",
            marginRight: "5px",
          }}></FontAwesomeIcon>
        <a className="text" href="/hotro">
          Hỗ trợ
        </a>
      </div>
    </div>
  );
};

export default HomeHeader;

const style = {
  position: "absolute",
  // top: "80px",
  // left: "232px",
  // transform: "translateX(-50%)",
  width: 200,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  // animation: "show_slide ease 1s forwards",
  // transform: "translateX(0%)",
};

{
  /* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <div className="book" onClick={() => handleBooking()}>
                Đặt lịch
              </div>
            </Box>
          </Modal> */
}
