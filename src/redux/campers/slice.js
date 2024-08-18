import { createSlice } from '@reduxjs/toolkit';

const initialCampersState = {
  items: [],
  loading: false,
  error: null,
};

const isFulfilled = action =>
  typeof action.type === 'string' && action.type.endsWith('/fulfilled');
const isPending = action =>
  typeof action.type === 'string' && action.type.endsWith('/pending');
const isRejected = action =>
  typeof action.type === 'string' && action.type.endsWith('/rejected');

const campersSlice = createSlice({
  name: 'campers',
  initialState: initialCampersState,
  extraReducers: builder => {
    builder
      .addMatcher(isFulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addMatcher(isPending, state => {
        state.loading = true;
        state.items = [];
        state.error = null;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
