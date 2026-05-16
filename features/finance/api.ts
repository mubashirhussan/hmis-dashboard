import { baseApi } from "@/lib/api/base-api";
import type { DashboardSummary } from "@/features/shared/types/dashboard-types";

export const financeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFinanceDashboard: builder.query<DashboardSummary, void>({
      query: () => "/finance/dashboard",
    }),
  }),
});

export const { useGetFinanceDashboardQuery } = financeApi;
