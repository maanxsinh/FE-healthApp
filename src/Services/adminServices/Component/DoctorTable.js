import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../reducer/apiRequest";
import "./DoctorTable.scss";

const DoctorTable = () => {
  const dispatch = useDispatch();
  const dataDocs = useSelector((state) => state.getAllUsers.data);
  useEffect(() => {
    const getDoctors = async () => {
      let data = await getAllUsers("Doctor", dispatch);
      console.log(dataDocs);
    };
    getDoctors();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>fullName</th>
            <th>email</th>
            {/* <th>password</th> */}
            <th>address</th>
            <th>phoneNumber</th>
            <th>gender</th>
            <th>position</th>
            <th>speciality</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dataDocs &&
            dataDocs.length > 0 &&
            dataDocs.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.fulltName}</td>
                  <td>{item.email}</td>
                  {/* <td>{item.password}</td> */}
                  <td>{item.address}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.gender}</td>
                  <td>{item.position}</td>
                  <td>{item.speciality}</td>
                  <td>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
