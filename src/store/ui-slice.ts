import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { navModalIsShow: false },
  reducers: {
    toggle(state) {
      state.navModalIsShow = !state.navModalIsShow;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
