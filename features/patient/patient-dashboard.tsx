"use client";

import { getFeatureById } from "@/features/data";
import { DashboardShell } from "@/features/shared/components/dashboard-shell";
import { DashboardView } from "@/features/shared/components/dashboard-view";
import { useGetPatientDashboardQuery } from "@/features/patient/api";

const cfg = getFeatureById("patient");

export function PatientDashboard() {
  const { data, isLoading, isError, error, refetch } =
    useGetPatientDashboardQuery();

  return (
    <DashboardShell
      title={cfg?.label ?? "Patient"}
      description={cfg?.description ?? "Patient dashboard"}
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
