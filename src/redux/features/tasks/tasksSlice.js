import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = tasksSlice.actions;

export default tasksSlice.reducer;
