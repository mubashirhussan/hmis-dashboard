"use client";

import { getFeatureById } from "@/features/data";
import { DashboardShell } from "@/features/shared/components/dashboard-shell";
import { DashboardView } from "@/features/shared/components/dashboard-view";
import { useGetIpdDashboardQuery } from "@/features/ipd/api";

const cfg = getFeatureById("ipd");

export function IpdDashboard() {
  const { data, isLoading, isError, error, refetch } = useGetIpdDashboardQuery();

  return (
    <DashboardShell
      title={cfg?.label ?? "IPD"}
      description={cfg?.description ?? "IPD dashboard"}
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
