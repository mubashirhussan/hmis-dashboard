"use client";

import { getFeatureById } from "@/features/data";
import { DashboardShell } from "@/features/shared/components/dashboard-shell";
import { DashboardView } from "@/features/shared/components/dashboard-view";
import { useGetLaboratoryDashboardQuery } from "@/features/laboratory/api";

const cfg = getFeatureById("laboratory");

export function LaboratoryDashboard() {
  const { data, isLoading, isError, error, refetch } =
    useGetLaboratoryDashboardQuery();

  return (
    <DashboardShell
      title={cfg?.label ?? "Laboratory"}
      description={cfg?.description ?? "Laboratory dashboard"}
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
