"use client";

import { useGetFinanceDashboardQuery } from "@/features/finance/api";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("finance");

export function FinanceDashboard() {
  const { isLoading, isError, error, refetch } = useGetFinanceDashboardQuery();

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
