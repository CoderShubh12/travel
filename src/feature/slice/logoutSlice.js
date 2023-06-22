import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogout = createAsyncThunk("userLogout", async () => {
  //   console.log(email, password);
  const res = await axios.post("http://localhost:8000/login");
  return res.data;
});

const logoutSlice = createSlice({
  name: "logoutUser",
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
    builder.addCase(userLogout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginUser = [];
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
export default logoutSlice.reducer;
