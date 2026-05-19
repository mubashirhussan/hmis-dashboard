"use client";

import { BloodBankInsightsSection } from "@/features/blood-bank/components/blood-bank-insights-section";
import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("blood-bank");

export function BloodBankDashboard() {
  return (
    <FeatureDashboardPage content={content}>
      <BloodBankInsightsSection />
    </FeatureDashboardPage>
  );
}
