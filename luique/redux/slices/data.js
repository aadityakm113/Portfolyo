import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../pages/api/getData';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (thunkAPI) => {
    try {
      console.log("Fetching Data");
      const result = await getData();
      console.log("result data", result);
      return result;
    } catch (error) {
      console.log("error fetching data", error);
      throw error;
    }
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; 
        state.error = null; 
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch";
      });
  }
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = dataSlice.actions;

export default dataSlice.reducer;