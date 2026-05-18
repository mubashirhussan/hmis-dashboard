"use client";

import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

export function OverviewDashboard() {
  const content = getDashboardContent("overview");

  return <FeatureDashboardPage content={content} />;
}
