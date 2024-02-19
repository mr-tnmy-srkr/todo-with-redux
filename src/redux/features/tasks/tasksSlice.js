import { createSlice } from "@reduxjs/toolkit";

/* const initialState = {
  tasks: [],
}; */
const initialState = {
  tasks: [
    /* {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      deadline: "2023-08-28",
      assignTo: "Mir Hussain",
      priority: "high",
    } */
  ],
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
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      if(payload.status ==="pending"){
      target.status= "running"}
      else if(payload.status ==="running"){
        target.status= "completed"
      }else{
        target.status= "archive"
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask,updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
