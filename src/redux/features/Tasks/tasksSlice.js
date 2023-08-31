import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  userTasksArr: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
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
      const filteredItems = state.tasks.filter((item) => item.id !== payload);
      state.tasks = [...filteredItems];
    },
    updateStatus: (state, { payload }) => {
      const foundItem = state.tasks.find((task) => task.id === payload.id);
      foundItem.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userTasksArr = state.tasks.filter((item) => item.name === payload);
    },
  },
});
export const { addTask, updateStatus, removeTask, userTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
