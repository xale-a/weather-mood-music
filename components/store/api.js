import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) => `weather/?city=${city}`,
    }),
    getTracks: builder.query({
      query: (moods) => `tracks/?${'moods='+moods?.join('&moods=')}`,
    }),
  }),
});

export const { useGetWeatherQuery, useGetTracksQuery } = api;
