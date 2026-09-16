// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => `/getAllStudents`,
    }),
    addStudent: builder.mutation({
      query: (newStudent) => ({
        url: "/addStudent",
        method: "POST",
        body: newStudent,
      }),
    }),
    deleteStudent: builder.mutation({
      query: (studentId) => ({
        url: `/deleteStudent/${studentId}`,
        method: "DELETE",
      }),
    }),
    updateStudent: builder.mutation({
      query: (student) => ({
        url: "/updateStudent",
        method: "PUT",
        body: student,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllStudentsQuery,
  useLazyGetAllStudentsQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
} = studentsApi;
