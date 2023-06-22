import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPlaces = createAsyncThunk("fetchplaces", async () => {
  const res = await fetch("http://localhost:8000/state");
  return res.json();
});

const placeSlice = createSlice({
  name: "places",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPlaces.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPlaces.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
export default placeSlice.reducer;
