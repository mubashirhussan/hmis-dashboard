export type MetricCardIcon =
  | "users-group"
  | "lab-flask"
  | "compliance-docs"
  | "pending-orders"
  | "home-visits"
  | "lab-completed"
  | "avg-tat-stopwatch"
  | "critical-info"
  | "repeat-rate"
  | "rejected-tests"
  | "home-samples"
  | "exams-user"
  | "pacs-monitor"
  | "reports-pending"
  | "report-tat"
  | "ct-scan"
  | "mri-scan"
  | "home-imaging"
  | "blood-stock"
  | "cross-match"
  | "blood-donation"
  | "blood-issued"
  | "blood-screening"
  | "blood-nat"
  | "revenue-money"
  | "finance-discount"
  | "finance-panel"
  | "collection-hourglass"
  | "refunds-undo"
  | "home-visits-main"
  | "home-lab"
  | "ultrasound"
  | "xray"
  | "avg-response"
  | "rating-stars";

export type MetricCardData = {
  id: string;
  label: string;
  value: string | number;
  changePercent: number;
  icon: MetricCardIcon;
  highlighted?: boolean;
};

export type DashboardPageContent = {
  title: string;
  subtitle?: string;
  metrics: MetricCardData[];
};
