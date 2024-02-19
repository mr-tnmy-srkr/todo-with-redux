import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Tanmoy",
  email: "ts@gmail.com",
  userTask: [],
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});
export default usersSlice.reducer;
