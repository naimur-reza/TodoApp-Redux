import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../../../utils/firebase.config";

const initialState = {
  name: "",
  email: "",
  isLoading: true, // Change this to false initially
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    console.log(data);
    return {
      name: data.user.displayName,
      email: data.user.email,
    };
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data);
    return {
      name: data.user.displayName,
      email: data.user.email,
    };
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
      state.name = "";
      state.email = "";
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.name = payload.name;
      state.email = payload.email;
    });
    builder.addCase(createUser.rejected, (state, { payload, error }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = error.message; // Access the error message from payload
      state.name = "";
      state.email = "";
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
      state.name = "";
      state.email = "";
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.name = payload.name;
      state.email = payload.email;
    });
    builder.addCase(login.rejected, (state, { payload, error }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = error.message; // Access the error message from payload
      state.name = "";
      state.email = "";
    });
  },
});
export const { setUser, toggleLoading, logout } = userSlice.actions;
export default userSlice.reducer;
