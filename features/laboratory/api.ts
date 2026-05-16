import { baseApi } from "@/lib/api/base-api";
import type { DashboardSummary } from "@/features/shared/types/dashboard-types";

export const laboratoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLaboratoryDashboard: builder.query<DashboardSummary, void>({
      query: () => "/laboratory/dashboard",
    }),
  }),
});

export const { useGetLaboratoryDashboardQuery } = laboratoryApi;
