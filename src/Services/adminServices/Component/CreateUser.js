import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAcc } from "../../../reducer/apiRequest";
import {
  modalFalse,
  reset,
  setAddress,
  setEmail,
  setFullname,
  setGender,
  setPassword,
  setPhoneNumber,
  setPosition,
  setSpeciality,
  setTypeRole,
} from "../../../reducer/userSlice";
import "./CreateUser.scss";

const CreateUser = (modal) => {
  const [role, setRole] = useState("Patient");
  const dispatch = useDispatch();
  const userCreate = useSelector((state) => state.register);
  const handleChange = (e) => {
    setRole(e.target.value);
    dispatch(setTypeRole(e.target.value));
  };
  const handleCreate = async () => {
    if (userCreate.typeRole === "Patient") {
      if (
        !userCreate.fulltName ||
        !userCreate.email ||
        !userCreate.password ||
        !userCreate.address ||
        !userCreate.phoneNumber ||
        !userCreate.gender
      ) {
        alert("Vui long dien day du thong tin");
      } else {
        await createAcc(userCreate);
        dispatch(reset());
        dispatch(modalFalse());
      }
    } else {
      if (
        !userCreate.fulltName ||
        !userCreate.email ||
        !userCreate.password ||
        !userCreate.address ||
        !userCreate.phoneNumber ||
        !userCreate.gender ||
        !userCreate.position ||
        !userCreate.speciality
      ) {
        alert("Vui long dien day du thong tin");
      } else {
        await createAcc(userCreate);
        dispatch(reset());
        dispatch(modalFalse());
      }
    }

    console.log(userCreate);
  };
  return (
    <div className="modal-container">
      <div className="modal-content">
        <select onChange={(e) => handleChange(e)}>
          <option value="Patient">Patient</option>
          <option value="Doctor">Doctor</option>
        </select>

        <div></div>
        <div>
          <p>fullName</p>
          <input onChange={(e) => dispatch(setFullname(e.target.value))} />
        </div>
        <div>
          <p>email</p>
          <input onChange={(e) => dispatch(setEmail(e.target.value))} />
        </div>
        <div>
          <p>password</p>
          <input onChange={(e) => dispatch(setPassword(e.target.value))} />
        </div>
        <div>
          <p>address</p>
          <input onChange={(e) => dispatch(setAddress(e.target.value))} />
        </div>
        <div>
          <p>phone number</p>
          <input onChange={(e) => dispatch(setPhoneNumber(e.target.value))} />
        </div>
        {role === "Doctor" && (
          <>
            <div>
              <p>position</p>
              <input onChange={(e) => dispatch(setPosition(e.target.value))} />
            </div>
            <div>
              <p>speciality</p>
              <input
                onChange={(e) => dispatch(setSpeciality(e.target.value))}
              />
            </div>
          </>
        )}
        <div>
          <p>gender</p>
          <select
            onChange={(e) => dispatch(setGender(e.target.value))}
            style={{ width: "70px", margin: "0px" }}>
            <option value={null}>Gender</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        <button onClick={() => handleCreate()}>Create</button>
        <button onClick={() => dispatch(modalFalse())}>Close</button>
      </div>
    </div>
  );
};

export default CreateUser;
