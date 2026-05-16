import { baseApi } from "@/lib/api/base-api";
import type { DashboardSummary } from "@/features/shared/types/dashboard-types";

export const pharmacyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPharmacyDashboard: builder.query<DashboardSummary, void>({
      query: () => "/pharmacy/dashboard",
    }),
  }),
});

export const { useGetPharmacyDashboardQuery } = pharmacyApi;
