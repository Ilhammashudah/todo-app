import { createSlice } from "@reduxjs/toolkit";

export const isToggle = createSlice({
  name: "isToggle",
  initialState: { isToggle: false },
  reducers: {
    open: (state) => {
      state.isToggle = true;
    },
    close: (state) => {
      state.isToggle = false;
    },
  },
});

export default isToggle.reducer;
export const { open, close } = isToggle.actions;
