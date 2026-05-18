"use client";

import { FeatureDashboardPage } from "@/features/shared/components/feature-dashboard-page";
import { getDashboardContent } from "@/features/shared/config/dashboard-content";

const content = getDashboardContent("blood-bank");

export function BloodBankDashboard() {
  return <FeatureDashboardPage content={content} />;
}
