import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../reducer/apiRequest";
import "./PatientTable.scss";

const PatientTable = () => {
  const dispatch = useDispatch();
  const dataDocs = useSelector((state) => state.getAllUsers.data);
  useEffect(() => {
    const getDoctors = async () => {
      let data = await getAllUsers("Patient", dispatch);
      console.log(dataDocs);
    };
    getDoctors();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>fullName</th>
          <th>email</th>
          {/* <th>password</th> */}
          <th>address</th>
          <th>phoneNumber</th>
          <th>gender</th>
          <th>Delete</th>
        </tr>
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
                <td>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default PatientTable;
