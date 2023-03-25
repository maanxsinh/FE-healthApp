import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInfDoctor = createAsyncThunk(
  "user/getInfDoctor",
  async (params, thunkAPI) => {
    const data = await axios.get("http://localhost:8080/getInfDoctor");
    return data;
  }
);

export const getTime = createAsyncThunk(
  "time/getTime",
  async (params, thunkAPI) => {
    const data = await axios.get("http://localhost:8080/getTime");
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getInfDoctor.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getInfDoctor.fulfilled]: (state, action) => {
      state.loading = "success";
      state.current.push(action.payload);
    },
    [getInfDoctor.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.error;
    },
  },
});
const showMenu = createSlice({
  name: "showMenu",
  initialState: {
    value: false,
  },
  reducers: {
    openMenu: (state) => {
      state.showMenu = true;
    },
    closeMenu: (state) => {
      state.showMenu = false;
    },
  },
});

const timeSlice = createSlice({
  name: "time",
  initialState: {
    status: "",
    time: [],
  },
  reducers: {},
  extraReducers: {
    [getTime.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTime.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.time = action.payload;
    },
  },
});

const userLogin = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    loginUser: (state, action) => {
      state = action.payload;
      console.log(">>>check state:", state);
    },
  },
});

const register = createSlice({
  name: "register",
  initialState: {
    fulltName: null,
    email: null,
    password: null,
    gender: null,
    phoneNumber: null,
    address: null,
    typeRole: "Patient",
    position: null,
    speciality: null,
  },
  reducers: {
    setFullname: (state, action) => {
      state.fulltName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setTypeRole: (state, action) => {
      state.typeRole = action.payload;
    },
    setSpeciality: (state, action) => {
      state.speciality = action.payload;
    },
    reset: (state) => {
      state.fulltName = null;
      state.email = null;
      state.password = null;
      state.address = null;
      state.phoneNumber = null;
      state.position = null;
      state.gender = null;
      state.speciality = null;
      state.typeRole = "Patient";
    },
  },
});

const getAllUsers = createSlice({
  name: "get all users",
  initialState: {
    data: null,
  },
  reducers: {
    getUsers: (state, action) => {
      state.data = action.payload;
    },
  },
});

const createUser = createSlice({
  name: "create user",
  initialState: {
    modal: false,
  },
  reducers: {
    modalTrue: (state) => {
      state.modal = true;
    },
    modalFalse: (state) => {
      state.modal = false;
    },
  },
});

export const { modalTrue, modalFalse } = createUser.actions;
export const { openMenu, closeMenu } = showMenu.actions;
export const { getUsers } = getAllUsers.actions;

export const { loginUser } = userLogin.actions;
export const {
  setFullname,
  setEmail,
  setPassword,
  setGender,
  setPhoneNumber,
  setAddress,
  setPosition,
  setTypeRole,
  setSpeciality,
  reset,
} = register.actions;

export {
  showMenu,
  userSlice,
  timeSlice,
  userLogin,
  register,
  getAllUsers,
  createUser,
};
