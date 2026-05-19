export type RevenueDayPoint = {
  id: string;
  label: string;
  /** Chart position value (Rs, log-scale axis) */
  income: number;
  expenses: number;
  incomeTooltip: string;
  expensesTooltip: string;
};

export const revenueOverviewDays: RevenueDayPoint[] = [
  {
    id: "mon",
    label: "Monday",
    income: 120_000_000,
    expenses: 80_000_000,
    incomeTooltip: "Rs 98M",
    expensesTooltip: "Rs 72M",
  },
  {
    id: "tue",
    label: "Tuesday",
    income: 60_000_000,
    expenses: 45_000_000,
    incomeTooltip: "Rs 60M",
    expensesTooltip: "Rs 45M",
  },
  {
    id: "wed",
    label: "Wednesday",
    income: 90_000_000,
    expenses: 70_000_000,
    incomeTooltip: "Rs 90M",
    expensesTooltip: "Rs 70M",
  },
  {
    id: "thu",
    label: "Thursday",
    income: 110_000_000,
    expenses: 85_000_000,
    incomeTooltip: "Rs 110M",
    expensesTooltip: "Rs 85M",
  },
  {
    id: "fri",
    label: "Friday",
    income: 128_000_000,
    expenses: 98_000_000,
    incomeTooltip: "Rs 120",
    expensesTooltip: "Rs 90",
  },
  {
    id: "sat",
    label: "Saturday",
    income: 75_000_000,
    expenses: 55_000_000,
    incomeTooltip: "Rs 75M",
    expensesTooltip: "Rs 55M",
  },
  {
    id: "sun",
    label: "Sunday",
    income: 50_000_000,
    expenses: 40_000_000,
    incomeTooltip: "Rs 50M",
    expensesTooltip: "Rs 40M",
  },
];

export const revenueOverviewSummary = {
  weeklyTotal: "Rs 5.24M",
  dailyAvg: "Rs 789k",
  vsTarget: "+11.2%",
};

export const revenueOverviewYLabels = [
  "Rs 500M",
  "Rs 100M",
  "Rs 10M",
  "Rs 1M",
  "Rs 500k",
  "Rs 100k",
  "Rs 10k",
  "Rs 0",
];

/** Log-scale Y positions (0 = top, 1 = bottom) */
export const revenueOverviewYLogPositions = [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1];

export type RevenueDeptSegment = {
  id: string;
  label: string;
  percent: number;
  revenue: string;
  color: string;
  pattern?: boolean;
};

/** Arc order left → right on semicircle */
export const revenueDeptSegments: RevenueDeptSegment[] = [
  {
    id: "laboratory",
    label: "Laboratory",
    percent: 10,
    revenue: "655k",
    color: "#7cb9e8",
  },
  {
    id: "radiology",
    label: "Radiology",
    percent: 10,
    revenue: "655k",
    color: "#026bb1",
  },
  {
    id: "ct-mri",
    label: "CT / MRI",
    percent: 30,
    revenue: "655k",
    color: "#f9b115",
  },
  {
    id: "blood-bank",
    label: "Blood Bank",
    percent: 20,
    revenue: "655k",
    color: "#ef4444",
  },
  {
    id: "home-services",
    label: "Home Services",
    percent: 30,
    revenue: "655k",
    color: "#22c55e",
    pattern: true,
  },
];

export type PaymentModeRow = {
  id: string;
  label: string;
  percent: number;
  value: string;
  tone?: "default" | "panel";
};

export const paymentModeRows: PaymentModeRow[] = [
  { id: "cash", label: "Cash", percent: 92, value: "491k" },
  { id: "card", label: "Card", percent: 97, value: "734k" },
  { id: "panel", label: "Panel", percent: 70, value: "390k", tone: "panel" },
  { id: "digital", label: "Digital", percent: 85, value: "690k" },
  { id: "credit", label: "Credit", percent: 98, value: "1.2M" },
];
