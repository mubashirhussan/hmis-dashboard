"use client";

import { useGetPharmacyDashboardQuery } from "@/features/pharmacy/api";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("pharmacy");

export function PharmacyDashboard() {
  const { isLoading, isError, error, refetch } =
    useGetPharmacyDashboardQuery();

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
