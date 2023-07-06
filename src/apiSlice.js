import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Recent Projects'],
    endpoints: (builder) => ({
      getTestimonials: builder.query({
        query: () => '/recentProjects',
        transformResponse: (res) => res.reverse(),
        providesTags: ['Recent Projects'],
      }),
    }),
  });
  
  export const {
    useGetTestimonialsQuery
  } = apiSlice;