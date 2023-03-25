import React from "react";
import "./CreateAcc.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setAddress,
  setEmail,
  setFullname,
  setGender,
  setPassword,
  setPhoneNumber,
} from "../reducer/userSlice";
import { createAcc } from "../reducer/apiRequest";

const CreateAcc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.register);
  const [warn, setWarn] = useState(false);
  const [rePass, setRePass] = useState(null);
  //   const [user, setUser] = useState({
  //     fulltName: null,
  //     email: null,
  //     password: null,
  //     gender: null,
  //     phoneNumber: null,
  //     address: null,
  //   });

  const changeAddress = (e) => {
    dispatch(setAddress(e.target.value));
  };
  const changeEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const changeFullname = (e) => {};
  const changePass = (e) => {
    dispatch(setPassword(e.target.value));
  };
  const changeRePass = (e) => {
    setRePass(e.target.value);
  };
  const changeGender = (e) => {
    dispatch(setGender(e.target.value));
  };
  const changePNumber = (e) => {
    dispatch(setPhoneNumber(e.target.value));
  };

  const handleRegister = async () => {
    if (
      !user.fulltName ||
      !user.email ||
      !user.password ||
      !user.phoneNumber ||
      !user.address ||
      !user.gender ||
      !rePass
    ) {
      setWarn(true);
    } else {
      if (user.password !== rePass) {
        setWarn(true);
        console.log("mat khau nhap lai khong dung");
      } else {
        await createAcc(user);
        console.log("thanh cong", user);
        navigate("/userLogin");
      }
    }
  };
  return (
    <div className="backgr">
      <div className="register">
        <div style={{ marginBottom: "-5px" }}>
          Họ và tên
          <br />
          <input
            onChange={(e) => dispatch(setFullname(e.target.value))}
            className="oneline"
          />
          {warn === true && !user.fulltName && (
            <p>Trường này không thể để trống</p>
          )}
        </div>
        <div style={{ marginBottom: "10px" }}>
          Email
          <br />
          <input onChange={(e) => changeEmail(e)} className="oneline" />
          {warn === true && !user.email && <p>Trường này không thể để trống</p>}
        </div>
        <div className="pass-repass">
          <div>
            Mật khẩu
            <br />
            <input
              onChange={(e) => changePass(e)}
              className="twolines"
              type="password"
            />
            {warn === true && !user.password && (
              <p>Trường này không thể để trống</p>
            )}
          </div>

          <div>
            Nhập lại mật khẩu
            <br />
            <input
              onChange={(e) => changeRePass(e)}
              className="twolines"
              type="password"
            />
            {warn === true && !rePass && <p>Trường này không thể để trống</p>}
            {warn === true && rePass !== user.password && (
              <p>Mật khẩu nhập lại không đúng</p>
            )}
          </div>
        </div>
        <div className="pass-repass">
          <div>
            <input
              onChange={(e) => changePNumber(e)}
              className="twolines"
              placeholder="Số điện thoại"
            />
            {warn === true && !user.phoneNumber && (
              <p>Trường này không thể để trống</p>
            )}
          </div>

          <select
            onChange={(e) => changeGender(e)}
            className="twolines"
            id="gender">
            <option value={null}>Giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
          {warn === true && !user.gender && <p>Vui lòng chọn giới tính</p>}
        </div>

        <div>
          Địa chỉ
          <br />
          <input onChange={(e) => changeAddress(e)} className="oneline" />
          {warn === true && !user.address && (
            <p>Trường này không thể để trống</p>
          )}
        </div>
        <div>
          <button onClick={() => handleRegister()}>REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAcc;
