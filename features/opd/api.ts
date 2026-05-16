import { baseApi } from "@/lib/api/base-api";
import type { DashboardSummary } from "@/features/shared/types/dashboard-types";

export const opdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOpdDashboard: builder.query<DashboardSummary, void>({
      query: () => "/opd/dashboard",
    }),
  }),
});

export const { useGetOpdDashboardQuery } = opdApi;
