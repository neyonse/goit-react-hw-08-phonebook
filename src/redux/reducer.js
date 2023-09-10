import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
