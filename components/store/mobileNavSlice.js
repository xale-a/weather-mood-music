import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
}

export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    setMobileNav: (state, value) => {
      if (typeof value.payload !== 'boolean') {
        return;
      }
      state.value = value.payload;
    }
  }
});

export const { setMobileNav } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;
