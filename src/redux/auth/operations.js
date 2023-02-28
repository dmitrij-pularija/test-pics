import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
    } catch ({ response: { status } }) {
      return thunkAPI.rejectWithValue(
        status === 400
          ? 'This email address is already in use !'
          : 'server connection error'
      );
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
    } catch ({ response: { status } }) {
      return thunkAPI.rejectWithValue(
        status === 400 ? 'Wrong email or password!' : 'server connection error'
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch ({ response: { status } }) {
    return thunkAPI.rejectWithValue(
      status === 500 ? 'Server error.' : 'Logout error'
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token, isLoggedIn } = thunkAPI.getState().auth;
    if (!isLoggedIn) return thunkAPI.rejectWithValue();
    if (token === 'null') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      return thunkAPI.rejectWithValue(
        message ? message : 'Failed to update user information'
      );
    }
  }
);