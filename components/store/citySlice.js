import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, value) => {
      state.value = value.payload;
    }
  }
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;
