"use client";

import { ImagingInsightsSection } from "@/features/imaging/components/imaging-insights-section";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("imaging");

export function ImagingDashboard() {
  return (
    <FeatureDashboardPage content={content}>
      <ImagingInsightsSection />
    </FeatureDashboardPage>
  );
}
