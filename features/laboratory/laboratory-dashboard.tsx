"use client";

import { useGetLaboratoryDashboardQuery } from "@/features/laboratory/api";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("laboratory");

export function LaboratoryDashboard() {
  const { isLoading, isError, error, refetch } =
    useGetLaboratoryDashboardQuery();

  return (
    <FeatureDashboardPage
      content={content}
      isLoading={isLoading}
      isError={isError}
      errorMessage={
        error && "status" in error
          ? `Request failed (${error.status})`
          : undefined
      }
      onRetry={refetch}
    />
  );
}
