export type FeatureId =
  | "patient"
  | "opd"
  | "ipd"
  | "pharmacy"
  | "laboratory"
  | "finance";

export type DashboardFeature = {
  id: FeatureId;
  label: string;
  description: string;
  href: string;
  apiPath: string;
};

export const dashboardFeatures: readonly DashboardFeature[] = [
  {
    id: "patient",
    label: "Patient",
    description: "Registration and demographics overview",
    href: "/patient",
    apiPath: "/patient/dashboard",
  },
  {
    id: "opd",
    label: "OPD",
    description: "Outpatient visits and queue metrics",
    href: "/opd",
    apiPath: "/opd/dashboard",
  },
  {
    id: "ipd",
    label: "IPD",
    description: "Inpatient census and bed occupancy",
    href: "/ipd",
    apiPath: "/ipd/dashboard",
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    description: "Dispensing and stock alerts",
    href: "/pharmacy",
    apiPath: "/pharmacy/dashboard",
  },
  {
    id: "laboratory",
    label: "Laboratory",
    description: "Orders, results, and turnaround time",
    href: "/laboratory",
    apiPath: "/laboratory/dashboard",
  },
  {
    id: "finance",
    label: "Finance",
    description: "Revenue, collections, and outstanding",
    href: "/finance",
    apiPath: "/finance/dashboard",
  },
] as const;

export function getFeatureById(id: FeatureId): DashboardFeature | undefined {
  return dashboardFeatures.find((feature) => feature.id === id);
}
