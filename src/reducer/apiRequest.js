import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
} from "./authSlice";
import { getDetail } from "./doctorSlice";
import { getUsers } from "./userSlice";

const loginApp = async (email, password, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    let res = await axios.post("http://localhost:8080/login", {
      email,
      password,
    });
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (e) {
    dispatch(loginFailed());
  }
};

const logoutUser = async (token, dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    await axios.post("http://localhost:8080/logout", {
      headers: { token: token },
    });
    dispatch(loginSuccess());
    navigate("/userLogin");
  } catch (e) {
    dispatch(logoutFailed());
  }
};

const getAppointment = async (doctorId, statusId) => {
  try {
    let data = await axios.get("http://localhost:8080/getAppointment", {
      params: { doctorId, statusId },
    });
    return data;
  } catch (e) {
    return e;
  }
};

const createAcc = async (data) => {
  try {
    let user = await axios.post("http://localhost:8080/createAcc", {
      data,
    });
    return user;
  } catch (e) {
    return e;
  }
};

const confirmAppointment = async (doctorId) => {
  try {
    let data = await axios.post("http://localhost:8080/confirmApm", {
      doctorId,
    });
    console.log("thanh cong", data);
    return data;
  } catch (e) {
    console.log("that bai");
    return e;
  }
};

const getAllUsers = async (typeRole, dispatch) => {
  try {
    let data = await axios.get("http://localhost:8080/getAllUsers", {
      params: { typeRole },
    });
    console.log(">>>get all users", data);
    dispatch(getUsers(data.data.data));
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getDetailDoctor = async (doctorId, navigate, dispatch) => {
  try {
    let data = await axios.get("http://localhost:8080/getDetailDoctor", {
      params: { doctorId },
    });
    navigate(`/bacsi/${doctorId}`);
    let detail = data.data.data;
    dispatch(getDetail(detail));
    console.log(">>>>> check data detail doctor", detail);
    return detail;
  } catch (e) {
    console.log(e);
  }
};

export {
  loginApp,
  logoutUser,
  getAppointment,
  createAcc,
  confirmAppointment,
  getAllUsers,
  getDetailDoctor,
};
