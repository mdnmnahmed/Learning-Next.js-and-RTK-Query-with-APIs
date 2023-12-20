import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: (someData) => {
                return {
                    url: `/api/todos?${someData}`,
                    method: 'GET'
                }
            }
        }),
    })
});

export const { useGetAllTodosQuery } = todoApi;