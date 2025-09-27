import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Movie } from '../../types/Movie';


const initialState: Movie[] = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Movie>) {
      const exists = state.find((m) => m.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      return state.filter((m) => m.id !== action.payload)
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

