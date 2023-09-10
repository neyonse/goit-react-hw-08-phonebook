import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64f4cc8c932537f4051ab678.mockapi.io';

export const loginUser = createAsyncThunk(
  'users/signup',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      console.log(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  'users/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);
      console.log(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout', user);
      console.log(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserToken = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/current');
      console.log(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
