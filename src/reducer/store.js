import { createSlice, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice.js";
import { dataBook } from "./bookingSlice.js";
import { detailDoctor } from "./doctorSlice.js";
import {
  userSlice,
  showMenu,
  timeSlice,
  userLogin,
  register,
  getAllUsers,
  createUser,
} from "./userSlice.js";

const reducerSlice = createSlice({
  name: "store",
  initialState: {},
  reducers: {
    someAction: function () {},
  },
});

const store = configureStore({
  reducer: {
    user: userSlice,
    show: showMenu,
    time: timeSlice,
    dataBook: dataBook.reducer,
    reducerSlice: reducerSlice.reducer,
    login: userLogin.reducer,
    auth: authSlice.reducer,
    register: register.reducer,
    getAllUsers: getAllUsers.reducer,
    createUser: createUser.reducer,
    detailDoctor: detailDoctor.reducer,
  },
});

export default store;
