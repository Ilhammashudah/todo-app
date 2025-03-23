import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: { user: { name: "", age: "", gender: "", isActive: false } },
  reducers: {
    changeUserName: (state, action) => {
      const { newName } = action.payload;
      state.user.name = newName;
    },
    changeUserActivityStatus: () => {
      state.user.isActive == !state.user.isActive;
    },
  },
});

export const {changeUserName,changeUserActivityStatus} = userSlice.actions;
export default userSlice.reducer;
