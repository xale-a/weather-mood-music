import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
}

export const navRefreshSlice = createSlice({
  name: 'navRefresh',
  initialState,
  reducers: {
    setNavRefresh: (state, value) => {
      if (typeof value.payload !== 'boolean') {
        return;
      }
      state.value = value.payload;
    }
  }
});

export const { setNavRefresh } = navRefreshSlice.actions;

export default navRefreshSlice.reducer;
