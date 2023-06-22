import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "userLogin",
  async (email, password) => {
    console.log(email, password);
    const res = await axios.post("http://localhost:8000/login", {
      email,
      password,
    });
    return res.data;
  }
);

const loginSlice = createSlice({
  name: "loginUser",
  initialState: {
    isLoading: false,
    loginUser: [
      {
        email: "",
        password: "",
      },
    ],
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginUser = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
export default loginSlice.reducer;
