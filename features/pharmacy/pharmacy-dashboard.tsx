"use client";

import { getFeatureById } from "@/features/data";
import { DashboardShell } from "@/features/shared/components/dashboard-shell";
import { DashboardView } from "@/features/shared/components/dashboard-view";
import { useGetPharmacyDashboardQuery } from "@/features/pharmacy/api";

const cfg = getFeatureById("pharmacy");

export function PharmacyDashboard() {
  const { data, isLoading, isError, error, refetch } =
    useGetPharmacyDashboardQuery();

  return (
    <DashboardShell
      title={cfg?.label ?? "Pharmacy"}
      description={cfg?.description ?? "Pharmacy dashboard"}
    >
      <DashboardView
        isLoading={isLoading}
        isError={isError}
        errorMessage={
          error && "status" in error
            ? `Request failed (${error.status})`
            : undefined
        }
        data={data}
        onRetry={refetch}
      />
    </DashboardShell>
  );
}
