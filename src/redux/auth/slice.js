import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { initialAuth } from '../../services/initial';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state, { payload }) {
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;