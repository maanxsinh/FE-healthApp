import axios from "axios";
import React, { useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { userLogin } from "../reducer/userSlice";
import { loginUser } from "../reducer/userSlice";
import { loginApp } from "../reducer/apiRequest";
import "./Login.scss";

const Login = () => {
  const infUser = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleLogin = async () => {
    // const data = await axios.post("http://localhost:8080/login", {
    //   email,
    //   password,
    // });
    // let userData = await data.data.data;
    // let userInf = {
    //   name: userData.fulltName,
    //   userId: userData.id,
    //   email: userData.email,
    //   typeRole: userData.typeRole,
    // };
    // console.log(userInf);
    // // await console.log(">>>Check data", userData);
    // dispatch(loginUser(userInf));
    // if (data.data.errCode != 1) {
    //   navigate("/");
    // } else {
    //   console.log(data.data.message);
    //   alert(data.data.message);
    // }

    await loginApp(email, password, dispatch, navigate);
    // let user = {
    //   id: infUser.data.id,
    //   name: infUser.data.fulltName,
    //   role: infUser.data.typeRole,
    //   token: infUser.accessToken,
    // };
    // localStorage.setItem("infUser", user);
    // localStorage.setItem("isLogin", "true");
  };

  return (
    <div className="form">
      <div className="input-container">
        <label>Email </label>
        <input
          type="text"
          name="uname"
          required
          onChange={(e) => onChangeEmail(e)}
        />
        {/* {renderErrorMessage("uname")} */}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input
          type="password"
          name="pass"
          required
          onChange={(e) => onChangePassword(e)}
        />
        {/* {renderErrorMessage("pass")} */}
      </div>
      <div className="button-container">
        <input type="submit" onClick={() => handleLogin()} />
        {/* <button onClick={() => handleLogin()}>Login</button> */}
      </div>
    </div>
  );
};

export default Login;
