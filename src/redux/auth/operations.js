import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useAuth } from '../../services/hooks';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const { data } = await axios.post('/users/signup', credentials);
        setAuthHeader(data.token);
        return data;
      } catch ({response: {data: { message }}}) {
        return thunkAPI.rejectWithValue(message ? message : 'This email address is already in use !');
      }
    }
  );

  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const { data } = await axios.post('/users/login', credentials);
        setAuthHeader(data.token);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue('Wrong email or password!');
      }
    }
  );

  export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch ({response: {data: { message }}}) {
      return thunkAPI.rejectWithValue(message);
    }
  });

  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {

      // const state = thunkAPI.getState();
      // const persistedToken = state.auth.token;
    //  const { isLoggedIn } = useAuth();
      // const { auth: { token }  } = thunkAPI.getState();
      const { token, isLoggedIn } = thunkAPI.getState().auth;
      // const { auth: {token} } = thunkAPI.getState();


      // console.log(token, isLoggedIn);
      if (!isLoggedIn) return thunkAPI.rejectWithValue();

      if (token === 'null') {
        console.log(token, isLoggedIn);
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(token);
        const { data } = await axios.get('/users/current');
        return data;
      } catch ({response: {data: { message }}}) {
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  