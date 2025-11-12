import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AllProduct } from "../components/ui/ListProduct";
import type { RootState } from "../store/store";

export const fakestoreApi = createApi({
  reducerPath: "fakestoreApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://fakestoreapi.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "users",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    allProduct: builder.query<AllProduct[], void>({
      query: () => `products`,
    }),
    getStaffProduct: builder.query<AllProduct, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useAllProductQuery, useGetStaffProductQuery} = fakestoreApi;
