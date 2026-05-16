import { baseApi } from "@/lib/api/base-api";
import type { DashboardSummary } from "@/features/shared/types/dashboard-types";

export const patientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPatientDashboard: builder.query<DashboardSummary, void>({
      query: () => "/patient/dashboard",
    }),
  }),
});

export const { useGetPatientDashboardQuery } = patientApi;
