
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Features/userSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
