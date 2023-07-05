import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Testimonials'],
    endpoints: (builder) => ({
      getTestimonials: builder.query({
        query: () => '/testimonials',
        transformResponse: (res) => res.reverse(),
        providesTags: ['Testimonials'],
      }),
    }),
  });
  
  export const {
    useGetTestimonialsQuery
  } = apiSlice;