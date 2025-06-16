import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Movie } from '../../types/Movie';

const savedFavorites = localStorage.getItem('favorites');
const initialState: Movie[] = savedFavorites ? JSON.parse(savedFavorites) : [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Movie>) {
      const exists = state.find((m) => m.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      const updated = state.filter((m) => m.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

