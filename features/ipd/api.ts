import { baseApi } from "@/lib/api/base-api";
import type { DashboardSummary } from "@/features/shared/types/dashboard-types";

export const ipdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getIpdDashboard: builder.query<DashboardSummary, void>({
      query: () => "/ipd/dashboard",
    }),
  }),
});

export const { useGetIpdDashboardQuery } = ipdApi;
