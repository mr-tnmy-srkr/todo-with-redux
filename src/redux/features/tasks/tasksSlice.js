import { createSlice } from "@reduxjs/toolkit";

/* const initialState = {
  tasks: [],
}; */
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
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
   /*  updateTask: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      // state.tasks = [...state.tasks,{id:payload.id,status:payload.status,...target}]
    }, */
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, updateTask, removeTask, updateStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
