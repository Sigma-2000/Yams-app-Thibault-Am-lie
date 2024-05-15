import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const uri = "http://localhost:3001";

export const pastriesApi = createApi({
  reducerPath: "pastriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: uri }),
  endpoints: (builder) => ({
    getAllPastries: builder.query({
      query: () => `/game/pastries`,
    }),
  }),
});

export const { useGetAllPastriesQuery } = pastriesApi;
