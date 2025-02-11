import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define the initial state for theme
const initialState = {
  theme: localStorage.getItem('theme') || 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Action to set the theme
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload); // Persist the theme to localStorage
    },
    // Optional: Toggle between light and dark theme
    toggleTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      localStorage.setItem('theme', newTheme);
    },
  },
});

// Export actions
export const { setTheme, toggleTheme } = themeSlice.actions;

// Selector to get the current theme
//@ts-ignore
export const selectTheme = (state: RootState) => state.theme.theme;

// Export the reducer
export default themeSlice.reducer;
