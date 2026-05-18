"use client";

import { OverviewInsightsSection } from "@/features/overview/components/overview-insights-section";
import { DepartmentWorkloadSection } from "@/features/overview/components/department-workload-section";
import { OverviewTablesSection } from "@/features/overview/components/overview-tables-section";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

export function OverviewDashboard() {
  const content = getDashboardContent("overview");

  return (
    <FeatureDashboardPage content={content}>
      <OverviewInsightsSection />
      <OverviewTablesSection />
      <DepartmentWorkloadSection />
    </FeatureDashboardPage>
  );
}
