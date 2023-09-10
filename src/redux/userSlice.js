import { createSlice } from '@reduxjs/toolkit';
// import { loginUser, signupUser, logoutUser } from './operations';

const userInitialState = {
  login: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
    // updateUserInfo(state, action) {},
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
