import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Make sure the import path is correct

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => "/tasks",
    }),
    updateStatus: build.mutation({
      query: ({ id, status }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: { status },
      }),
    }),
    addTask: build.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetTasksQuery, useUpdateStatusMutation, useAddTaskMutation } =
  baseApi;
export default baseApi;
