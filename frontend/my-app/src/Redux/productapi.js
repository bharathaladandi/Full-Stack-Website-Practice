import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery( { baseUrl: `https://blossombackend.onrender.com/products` }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "SelfCare",
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;
