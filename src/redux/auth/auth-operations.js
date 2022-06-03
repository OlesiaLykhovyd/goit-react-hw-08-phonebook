import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  distance: '20px',
});

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async userData => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('There is already user with this email');
  }
});

const logIn = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Incorrect email or password');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    Notiflix.Notify.failure('Something goes wrong');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      // console.log(error);
    }
  }
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
