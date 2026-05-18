"use client";

import { useGetOpdDashboardQuery } from "@/features/opd/api";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("opd");

export function OpdDashboard() {
  const { isLoading, isError, error, refetch } = useGetOpdDashboardQuery();

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
