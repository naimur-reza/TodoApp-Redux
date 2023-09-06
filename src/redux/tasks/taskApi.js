import baseApi from "../../api/baseApi";

const taskApi = baseApi.injectEndpoints({
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
    deleteTask: build.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useUpdateStatusMutation,
  useAddTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
