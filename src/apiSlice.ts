import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Recent Projects'],
    endpoints: (builder) => ({
      getRecentProjects: builder.query({
        query: () => '/recentProjects',
        transformResponse: (res : any) => res.reverse(),
        providesTags: ['Recent Projects'],
      }),
    }),
  });
  
  export const {
    useGetRecentProjectsQuery
  } = apiSlice;