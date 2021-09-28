import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice';
import moodReducer from './moodsSlice';
import refreshReducer from './refreshSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    moods: moodReducer,
    refresh: refreshReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
});
