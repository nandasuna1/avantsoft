import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://run.mocky.io/v3/'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () =>  `ce47ee53-6531-4821-a6f6-71a188eaaee0`
        })
    })
})

export const {
    useGetUsersQuery
} = usersApi