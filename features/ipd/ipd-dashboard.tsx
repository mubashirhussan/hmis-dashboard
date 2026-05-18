"use client";

import { useGetIpdDashboardQuery } from "@/features/ipd/api";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("ipd");

export function IpdDashboard() {
  const { isLoading, isError, error, refetch } = useGetIpdDashboardQuery();

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
