import React, { useEffect } from "react";
import Home from "./Home";
import CoSoYTe from "./HomeHeader/CoSoYTe";
import ChuyenKhoa from "./HomeHeader/ChuyenKhoa";
import BacSi from "./HomeHeader/BacSi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorDetail from "./HomeHeader/DoctorDetail";
import DatLich from "./HomeHeader/DatLich/DatLich";
import Login from "./Login/Login.js";
import DatLichNhanh from "./HomeHeader/DatLich/DatLichNhanh";
import { useSelector } from "react-redux";
import ManageUser from "./Services/adminServices/ManageUser";
import UserLogin from "./Login/userLogin";
import CreateAcc from "./Login/CreateAcc";

const App = () => {
  const dataUserLogin = useSelector((state) => state.login);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cosoyte" element={<CoSoYTe />} />
        <Route path="/chuyenkhoa" element={<ChuyenKhoa />} />
        <Route path="/bacsi" element={<BacSi />} />
        <Route path="/bacsi/:id" element={<DoctorDetail />} />
        <Route path="/datlich" element={<DatLich />} />
        <Route path="/datlichnhanh" element={<DatLichNhanh />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/createAcc" element={<CreateAcc />} />
        <Route path="/manage-user" element={<ManageUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
