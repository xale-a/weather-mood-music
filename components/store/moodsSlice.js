import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: undefined,
}

export const moodsSlice = createSlice({
  name: 'moods',
  initialState,
  reducers: {
    weatherToMoods: (state, value) => {
      if (value.payload === 800) {
        // Case: Clear
        state.value = ['happy', 'joyful', 'pop'];
        return;
      }
      switch(Math.floor(value.payload / 100)) {
        case 2: // Thunderstorm
          state.value = ['metal', 'rock'];
          break;
        case 3: // Drizzle
          state.value = ['joyful', 'relaxed'];
          break;
        case 5: // Rain
          state.value = ['comfort', 'sad'];
          break;
        case 6: // Snow
          state.value = ['christmas', 'relaxed'];
          break;
        case 7: // Atmosphere
          state.value = ['moody', 'alternative', 'sad'];
          break;
        case 8: // Clouds
          state.value = ['alternative', 'hip-hop', 'happy'];
          break;
        default:
          state.value = undefined;
          break;
      }
    },
  }
});

export const { weatherToMoods } = moodsSlice.actions;

export default moodsSlice.reducer;
