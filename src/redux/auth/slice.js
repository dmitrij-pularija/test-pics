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
        // state.isLoading = false;
      },
      [logIn.fulfilled](state, { payload }) {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        // state.isLoading = false;
      },
      [logOut.fulfilled](state) {
        // state = initialAuth;
        // state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
      [refreshUser.pending](state) {
        state.isRefreshing = true;
      },
      // [logOut.pending](state) {
      //   state.isLoading = true;
      // },
      // [logIn.pending](state) {
      //  state.error = null;
      //  state.isLoading = true;
      // },
      // [register.pending](state) {
      //   state.error = null;
      //   state.isLoading = true;
      //  },
 
      [refreshUser.fulfilled](state, { payload }) {
        state.user = payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        // state.error = null;
      },
      [refreshUser.rejected](state, { payload }) {
      //  state.error = payload;
       state.token = null;
       state.isLoggedIn = false;
       state.isRefreshing = false;
      },
      // [logIn.rejected](state, { payload }) {
      //   state.error = payload;
      //   state.isLoading = false;
      //  },
      //  [logOut.rejected](state, { payload }) {
      //   state.error = payload;
      //   state.isLoading = false;
      //  },
      //  [register.rejected](state, { payload }) {
      //   state.error = payload;
      //   state.isLoading = false;
      //  },
    },
  });
  
  export const authReducer = authSlice.reducer;