import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Naimur Reza",
  email: "naimur@homtmail.com",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
