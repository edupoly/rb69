import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: window.localStorage.getItem("token") || null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      window.localStorage.setItem("token", action.payload);
    },
  },
});

export const { setToken } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
