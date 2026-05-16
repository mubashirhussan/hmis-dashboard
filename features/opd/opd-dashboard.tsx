"use client";

import { getFeatureById } from "@/features/data";
import { DashboardShell } from "@/features/shared/components/dashboard-shell";
import { DashboardView } from "@/features/shared/components/dashboard-view";
import { useGetOpdDashboardQuery } from "@/features/opd/api";

const cfg = getFeatureById("opd");

export function OpdDashboard() {
  const { data, isLoading, isError, error, refetch } = useGetOpdDashboardQuery();

  return (
    <DashboardShell
      title={cfg?.label ?? "OPD"}
      description={cfg?.description ?? "OPD dashboard"}
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
