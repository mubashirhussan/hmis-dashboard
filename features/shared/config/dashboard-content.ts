import type {
  DashboardPageContent,
  MetricCardData,
  MetricCardIcon,
} from "@/features/shared/types/metric-card";

function withMetricIcons(
  icons: MetricCardIcon[],
  metrics: Omit<MetricCardData, "icon">[],
): MetricCardData[] {
  return metrics.map((metric, index) => ({
    ...metric,
    icon: icons[index],
  }));
}

export const dashboardContentByModule: Record<string, DashboardPageContent> = {
  overview: {
    title: "Dashboard",
    subtitle: "Real time overview of diagnostic operations",
    metrics: withMetricIcons(
      [
        "users-group",
        "lab-flask",
        "compliance-docs",
        "compliance-docs",
        "pending-orders",
        "home-visits",
      ],
      [
        {
          id: "patients",
          label: "Patients Registered",
          value: "438",
          changePercent: 12,
          highlighted: true,
        },
        {
          id: "tests",
          label: "Total Tests",
          value: "1,247",
          changePercent: 12,
        },
        {
          id: "stat",
          label: "STAT Compliance",
          value: "92.2%",
          changePercent: 2.1,
        },
        {
          id: "tat",
          label: "TAT Compliance",
          value: "92.2%",
          changePercent: 2.1,
        },
        {
          id: "pending",
          label: "Pending Orders",
          value: "67",
          changePercent: -8,
        },
        {
          id: "visits",
          label: "Home Visits",
          value: "23",
          changePercent: 4,
        },
      ],
    ),
  },
  laboratory: {
    title: "Laboratory Management",
    subtitle: "Real time overview of laboratory operations",
    metrics: withMetricIcons(
      [
        "lab-completed",
        "pending-orders",
        "avg-tat-stopwatch",
        "critical-info",
        "repeat-rate",
        "rejected-tests",
        "home-samples",
      ],
      [
        {
          id: "completed",
          label: "Completed",
          value: "793",
          changePercent: 12,
          highlighted: true,
        },
        {
          id: "pending",
          label: "Pending Tests",
          value: "67",
          changePercent: 12,
        },
        {
          id: "avg-tat",
          label: "Avg TAT",
          value: "1h 24m",
          changePercent: 2.1,
        },
        {
          id: "critical",
          label: "Critical",
          value: "18",
          changePercent: 2.1,
        },
        {
          id: "repeat-rate",
          label: "Repeat Rate",
          value: "1.2%",
          changePercent: -8,
        },
        {
          id: "rejected",
          label: "Rejected Tests",
          value: "16",
          changePercent: 4,
        },
        {
          id: "home-samples",
          label: "Home Samples",
          value: "87",
          changePercent: 4,
        },
      ],
    ),
  },
  imaging: {
    title: "Imaging & Radiology",
    subtitle: "Real time overview of imaging operations",
    metrics: withMetricIcons(
      [
        "exams-user",
        "pacs-monitor",
        "reports-pending",
        "report-tat",
        "ct-scan",
        "mri-scan",
        "home-imaging",
      ],
      [
        {
          id: "exams",
          label: "Exams",
          value: "223",
          changePercent: 12,
          highlighted: true,
        },
        {
          id: "pacs",
          label: "PACS Studies",
          value: "198",
          changePercent: 12,
        },
        {
          id: "pending",
          label: "Pending Reports",
          value: "14",
          changePercent: 2.1,
        },
        {
          id: "report-tat",
          label: "Report TAT",
          value: "28%",
          changePercent: 2.1,
        },
        {
          id: "ct",
          label: "CT Scan",
          value: "18",
          changePercent: -68,
        },
        {
          id: "mri",
          label: "MRI",
          value: "18",
          changePercent: -8,
        },
        {
          id: "home-imaging",
          label: "Home Imaging",
          value: "7",
          changePercent: 4,
        },
      ],
    ),
  },
  "blood-bank": {
    title: "Blood Bank",
    subtitle: "Inventory, cross-matching, donor management",
    metrics: withMetricIcons(
      [
        "blood-stock",
        "cross-match",
        "blood-donation",
        "blood-issued",
        "blood-screening",
        "blood-nat",
      ],
      [
        {
          id: "stock",
          label: "Stock",
          value: "342",
          changePercent: 12,
          highlighted: true,
        },
        {
          id: "cross-match",
          label: "Cross-Match",
          value: "18",
          changePercent: 12,
        },
        {
          id: "donations",
          label: "Donations",
          value: "14",
          changePercent: 2.1,
        },
        {
          id: "issued",
          label: "Issued",
          value: "11",
          changePercent: 2.1,
        },
        {
          id: "screening",
          label: "Screening",
          value: "100%",
          changePercent: -8,
        },
        {
          id: "nat",
          label: "NAT",
          value: "45%",
          changePercent: 4,
        },
      ],
    ),
  },
  finance: {
    title: "Finance & Billing",
    subtitle: "Real time overview of financial operations",
    metrics: withMetricIcons(
      [
        "revenue-money",
        "finance-discount",
        "finance-panel",
        "collection-hourglass",
        "refunds-undo",
      ],
      [
        {
          id: "revenue",
          label: "Revenue",
          value: "Rs 876K",
          changePercent: 12,
          highlighted: true,
        },
        {
          id: "discount",
          label: "Discount",
          value: "Rs 79K",
          changePercent: 12,
        },
        {
          id: "panel",
          label: "Panel",
          value: "Rs 548K",
          changePercent: 2.1,
        },
        {
          id: "collection-centers",
          label: "Collection Centers",
          value: "Rs 1.2M",
          changePercent: 2.1,
        },
        {
          id: "refunds",
          label: "Refunds",
          value: "Rs 12K",
          changePercent: -0.8,
        },
      ],
    ),
  },
  "home-services": {
    title: "Home Services",
    subtitle: "Real time overview of home care operations",
    metrics: withMetricIcons(
      [
        "home-visits-main",
        "home-lab",
        "ultrasound",
        "xray",
        "avg-response",
        "rating-stars",
      ],
      [
        {
          id: "visits",
          label: "Visits",
          value: "25",
          changePercent: 12,
          highlighted: true,
        },
        {
          id: "lab",
          label: "Lab",
          value: "15",
          changePercent: 12,
        },
        {
          id: "ultrasound",
          label: "Ultrasound",
          value: "5",
          changePercent: 2.1,
        },
        {
          id: "xray",
          label: "X-Ray",
          value: "2",
          changePercent: 2.1,
        },
        {
          id: "avg-response",
          label: "Avg Response Time",
          value: "24min",
          changePercent: -8,
        },
        {
          id: "rating",
          label: "Rating",
          value: "4.5",
          changePercent: 4,
        },
      ],
    ),
  },
};

export function getDashboardContent(moduleKey: string): DashboardPageContent {
  return (
    dashboardContentByModule[moduleKey] ?? dashboardContentByModule.overview
  );
}
