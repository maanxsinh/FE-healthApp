import React, { useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { userLogin } from "../reducer/userSlice";
import { loginUser } from "../reducer/userSlice";
import { loginApp } from "../reducer/apiRequest";
import "./Login.scss";
import "./userLogin.scss";

const UserLogin = () => {
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
    await loginApp(email, password, dispatch, navigate);
  };
  return (
    <div className="backgr">
      <div className="login-form">
        <input onChange={(e) => onChangeEmail(e)} placeholder="username" />
        <input
          onChange={(e) => onChangePassword(e)}
          type="password"
          placeholder="password"
        />
        <button onClick={() => handleLogin()}>LOGIN</button>
        <p>
          Not registered? <a href="/createAcc">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
