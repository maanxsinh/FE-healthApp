import { createSlice } from "@reduxjs/toolkit";
import CoSoYTe from "../HomeHeader/CoSoYTe";

export const dataBook = createSlice({
  name: "dataBook",
  initialState: {
    doctorId: "",
    // doctorName: "",
    date: "",
    timeType: "",
    patientId: "",
    statusId: "",
  },
  reducers: {
    selectDoctorId: (state, action) => {
      state.doctorId = action.payload;
    },
    // selectDoctorName: (state, action) => {
    //   state.doctorName = action.payload;
    // },
    selectDate: (state, action) => {
      state.date = action.payload;
    },
    selectTime: (state, action) => {
      state.timeType = action.payload;
      // console.log(state);
    },
    statusBook: (state, action) => {
      state.statusId = "NEW";
    },
    patientId: (state, action) => {
      state.patientId = action.payload;
    },
  },
});

export const {
  selectDate,
  selectDoctorId,
  selectTime,
  selectDoctorName,
  statusBook,
  patientId,
} = dataBook.actions;
export default dataBook.reducer;
