import { createSlice } from '@reduxjs/toolkit';

const initialFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavoritesState,
  reducers: {
    changeFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
});

export const { changeFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
