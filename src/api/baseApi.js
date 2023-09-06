import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Make sure the import path is correct

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Task"],
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => "/tasks",
      providesTags: ["Task"],
    }),
    updateStatus: build.mutation({
      query: ({ id, status }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Task"],
    }),
    addTask: build.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});
export const { useGetTasksQuery, useUpdateStatusMutation, useAddTaskMutation } =
  baseApi;
export default baseApi;
