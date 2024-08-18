import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet } from '../../service/axios';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const response = await axiosGet('/campers/advert');
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
