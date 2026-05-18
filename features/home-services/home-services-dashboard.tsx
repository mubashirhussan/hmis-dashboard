"use client";

import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("home-services");

export function HomeServicesDashboard() {
  return <FeatureDashboardPage content={content} />;
}
