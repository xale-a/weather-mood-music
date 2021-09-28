import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
}

export const refreshSlice = createSlice({
  name: 'refresh',
  initialState,
  reducers: {
    setRefresh: (state, value) => {
      if (typeof value.payload !== 'boolean') {
        return;
      }
      state.value = value.payload;
    }
  }
});

export const { setRefresh } = refreshSlice.actions;

export default refreshSlice.reducer;
