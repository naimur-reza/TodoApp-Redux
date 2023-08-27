import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/Tasks/tasksSlice";
const store = configureStore({
  reducer: {
    tasksSlice,
  },
});

export default store;
