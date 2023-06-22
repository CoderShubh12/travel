import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// console.log("-----------",baseURL)

export const registerUser = createAsyncThunk("registerUser", async () => {
  const res = await axios.post(`http://localhost:8000/register`);
  console.log("rseess", res.data);
});

const authSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    signUpuser: [],
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.signUpuser = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
export default authSlice.reducer;
