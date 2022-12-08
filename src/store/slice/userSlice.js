import { createSlice } from "@reduxjs/toolkit";
import fetchUser from "../thunk/userFech";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    users: [],
    hasError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = action.error.message;
    });
  },
});

export const UserReducer = UserSlice.reducer;
