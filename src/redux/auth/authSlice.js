import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signupUser, logoutUser, updateUser } from './operations';
import { authInitialState } from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(updateUser.pending, state => {
        state.isUpdating = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isUpdating = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isUpdating = false;
      });
  },
});

export const authReducer = authSlice.reducer;
