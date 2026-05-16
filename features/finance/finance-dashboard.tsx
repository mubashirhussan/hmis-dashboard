"use client";

import { getFeatureById } from "@/features/data";
import { DashboardShell } from "@/features/shared/components/dashboard-shell";
import { DashboardView } from "@/features/shared/components/dashboard-view";
import { useGetFinanceDashboardQuery } from "@/features/finance/api";

const cfg = getFeatureById("finance");

export function FinanceDashboard() {
  const { data, isLoading, isError, error, refetch } =
    useGetFinanceDashboardQuery();

  return (
    <DashboardShell
      title={cfg?.label ?? "Finance"}
      description={cfg?.description ?? "Finance dashboard"}
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
