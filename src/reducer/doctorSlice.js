import { createSlice } from "@reduxjs/toolkit";

const detailDoctor = createSlice({
  name: "detail",
  initialState: {
    data: null,
  },
  reducers: {
    getDetail: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getDetail } = detailDoctor.actions;

export { detailDoctor };
