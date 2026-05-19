"use client";

import { HomeServicesInsightsSection } from "@/features/home-services/components/home-services-insights-section";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("home-services");

export function HomeServicesDashboard() {
  return (
    <FeatureDashboardPage content={content}>
      <HomeServicesInsightsSection />
    </FeatureDashboardPage>
  );
}
