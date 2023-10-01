import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Make sure the import path is correct

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Task"],
  endpoints: () => ({}),
});
// export const { useGetTasksQuery, useUpdateStatusMutation, useAddTaskMutation } =
//   baseApi;
export default baseApi;
