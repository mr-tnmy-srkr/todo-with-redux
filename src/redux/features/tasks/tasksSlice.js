import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};
// let uuid = crypto.randomUUID();

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      // state.tasks.push({ id: uuid, ...payload });
     // or
      if (state.tasks.length == 0) {
        state.tasks.push({ id: 1, ...payload });
      }else{
       const lastElement = state.tasks.at(-1)
        state.tasks.push({ id:lastElement.id +1, ...payload });
      }
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
