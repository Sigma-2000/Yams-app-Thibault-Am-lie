import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const uri = "http://localhost:3001";

export const crudApi = createApi({
  reducerPath: "crudApi",
  baseQuery: fetchBaseQuery({ baseUrl: uri, credentials: 'include' }),
  //credentials: 'include' pour qu'on puisse avoir accès au jwt dans les cookies
  endpoints: (builder) => ({
    addQuantity: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/pastry/${id}`,
        method: "PUT",
        body: quantity,
      }),
      transformResponse: (response) => {
       console.log(response)
        return response;
      },
    }),
  }),
});

export const { useAddQuantityMutation } = crudApi;
