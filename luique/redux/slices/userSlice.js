// slices/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  loading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = null;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export default userSlice.reducer;
