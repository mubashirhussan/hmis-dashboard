import type { DashboardSummary } from "@/features/shared/types/dashboard-types";

export function createMockDashboard(
  module: string,
  title: string,
): DashboardSummary {
  return {
    module,
    title,
    updatedAt: new Date().toISOString(),
    metrics: [
      { id: "total", label: "Total today", value: 128, changePercent: 4.2 },
      { id: "pending", label: "Pending", value: 14, changePercent: -2.1 },
      { id: "completed", label: "Completed", value: 114, changePercent: 6.8 },
      { id: "critical", label: "Critical alerts", value: 3, changePercent: 0 },
    ],
  };
}
