import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    tagTypes: ['User'],
    endpoints(builder){
        return {
            autoLogin: builder.query({
                query: () => ('/me'),
                providesTags: ['User']
            }),
            createUser: builder.mutation({
               query: ({...body}) => ({
                    url: '/signup',
                    method: 'POST',
                    body
               }),
               invalidatesTags: ['User']
            }),
            logoutUser: builder.mutation({
                query: () => ({
                    url: '/logout',
                    method: 'DELETE'
                }),
                // async onQueryStarted(_, {dispatch, queryFulfilled}) {
                //     userApi.util.updateQueryData('autoLogin', undefined, (draft) => {
                //         Object.keys(draft).forEach(key => delete draft[key])
                //     })
                //     try {
                //         await queryFulfilled
                //         // dispatch(userApi.util.resetApiState())
                //     } catch {
                //         dispatch(userApi.util.invalidateTags(['User']))
                //         // dispatch(userApi.util.resetApiState())
                //     }
                // }
            }),
            loginUser: builder.mutation({
                query: ({...body}) => ({
                    url: '/login',
                    method: 'POST',
                    body
                }),
                invalidatesTags: ['User']
            })
        }
    }
})

export const { useAutoLoginQuery, useCreateUserMutation, useLogoutUserMutation, useLoginUserMutation } = userApi