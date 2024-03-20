import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }), // Hace las veces de Axios
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/user'
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/user',
                method: 'POST',
                body: newUser
            })
        }),
        updateUser: builder.mutation({
            query: ({ id, updatedUser }) => ({
                url: `/user/${id}`,
                method: 'PATCH',
                body: updatedUser
            })
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/user/${id}`,
                method: 'DELETE',
            })
        }),
    }),    
});

export const { useGetUsersQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = apiSlice;
