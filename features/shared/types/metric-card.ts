export type MetricCardIcon =
  | "patients"
  | "tests"
  | "compliance"
  | "pending"
  | "home"
  | "revenue"
  | "imaging"
  | "blood"
  | "finance"
  | "services";

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
  subtitle: string;
  metrics: MetricCardData[];
};
