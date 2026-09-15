// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const empApi = createApi({
  reducerPath: "empApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/employees" }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => `/`,
    }),
    addEmployee: builder.mutation({
      query: (newEmployee) => ({
        url: "/addEmployee",
        method: "POST",
        body: newEmployee,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeesQuery, useAddEmployeeMutation } = empApi;
