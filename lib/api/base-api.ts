import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "@/lib/config/env";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiUrl,
    prepareHeaders: (headers) => {
      // Attach auth when available, e.g. headers.set("Authorization", `Bearer ${token}`)
      return headers;
    },
  }),
  endpoints: () => ({}),
});
