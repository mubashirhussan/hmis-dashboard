export type DashboardMetric = {
  id: string;
  label: string;
  value: number | string;
  changePercent?: number;
};

export type DashboardChartPoint = {
  label: string;
  value: number;
};

/** Shared payload while dashboards match; use feature-local types when an API differs. */
export type DashboardSummary = {
  module: string;
  title: string;
  updatedAt: string;
  metrics: DashboardMetric[];
  trends?: DashboardChartPoint[];
};
