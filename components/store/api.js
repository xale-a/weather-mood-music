import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) => {
        if (typeof city === 'number') {
          return `weather?city=${city}`;
        } else if (city?.latitude != null && city?.longitude != null) {
          return `weather?lat=${city.latitude}&lon=${city.longitude}`;
        } else {
          return 'weather';
        }
      },
    }),
    getTracks: builder.query({
      query: (moods) => {
        if (moods instanceof Array && moods.length !== 1) {
          return `tracks?${'moods='+moods.join('&moods=')}`;
        } else {
          return 'tracks';
        }
      }
    }),
  }),
});

export const { useGetWeatherQuery, useGetTracksQuery } = api;
