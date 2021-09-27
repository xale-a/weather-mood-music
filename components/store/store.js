import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice';
import moodReducer from './moodsSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    moods: moodReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
});
