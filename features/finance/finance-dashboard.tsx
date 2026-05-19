"use client";

import { useGetFinanceDashboardQuery } from "@/features/finance/api";
import { FinanceInsightsSection } from "@/features/finance/components/finance-insights-section";
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
    >
      <FinanceInsightsSection />
    </FeatureDashboardPage>
  );
}
