import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../reducer/apiRequest";
import CreateUser from "./Component/CreateUser";
import DoctorTable from "./Component/DoctorTable";
import PatientTable from "./Component/PatientTable";
import { modalTrue } from "../../reducer/userSlice";
import "./ManagerServices.scss";

const ManageUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [manageUser, setManageUser] = useState("Doctor");
  const admin = useSelector((state) => state.auth.login.currentUser);
  const modal = useSelector((state) => state.createUser.modal);
  useEffect(() => {
    if (admin?.data.typeRole !== "Admin") {
      navigate("/userLogin");
    }
    console.log(admin);
  }, []);

  const chooseUser = (e) => {
    setManageUser(e.target.value);
  };

  return (
    <>
      {modal === true && (
        <div className="create-user">
          <CreateUser modal={modal} />
        </div>
      )}
      <div className="manage-user">
        <div className="se-bu">
          <select className="select" onChange={(e) => chooseUser(e)}>
            <option value="Doctor">Bác sĩ</option>
            <option value="Patient">Bệnh nhân</option>
          </select>
          <button onClick={() => dispatch(modalTrue())}>
            Tạo người dùng mới
          </button>
        </div>

        {manageUser === "Doctor" ? <DoctorTable /> : <PatientTable />}
      </div>
    </>
  );
};

export default ManageUser;
