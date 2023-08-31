import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/Tasks/tasksSlice";
import userSlice from "./features/Users/usersSlice";
const store = configureStore({
  reducer: {
    tasksSlice,
    userSlice,
  },
});

export default store;
