import { createSlice } from '@reduxjs/toolkit';

const initialFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavoritesState,
  reducers: {
    addFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorites(state, action) {
      state.favorites = state.favorites.filter(
        favorite => favorite._id !== action.payload
      );
    },
  },
});

export const { addFavorites } = favoritesSlice.actions;
export const { removeFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
