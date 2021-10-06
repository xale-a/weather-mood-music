import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice';
import moodReducer from './moodsSlice';
import refreshReducer from './refreshSlice';
import mobileNavReducer from './mobileNavSlice';
import navRefreshReducer from './navRefreshSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    moods: moodReducer,
    refresh: refreshReducer,
    mobileNav: mobileNavReducer,
    navRefresh: navRefreshReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
});
