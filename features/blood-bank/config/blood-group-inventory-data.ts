export type BloodGroupTone = "rose" | "blue";

export type BloodGroupStockStatus = "ok" | "low" | "critical";

export type BloodGroupInventoryItem = {
  id: string;
  group: string;
  units: number;
  status: BloodGroupStockStatus;
  tone: BloodGroupTone;
  highlighted?: boolean;
};

export type BloodGroupInventorySummary = {
  totalUnits: number;
  sufficientGroups: number;
  lowStockGroups: number;
  criticalGroups: number;
};

export const bloodGroupInventoryItems: BloodGroupInventoryItem[] = [
  {
    id: "a-pos",
    group: "A+",
    units: 78,
    status: "ok",
    tone: "rose",
    highlighted: true,
  },
  {
    id: "b-pos",
    group: "B+",
    units: 89,
    status: "ok",
    tone: "rose",
  },
  {
    id: "o-pos",
    group: "O+",
    units: 12,
    status: "critical",
    tone: "blue",
  },
  {
    id: "ab-pos",
    group: "AB+",
    units: 43,
    status: "low",
    tone: "rose",
  },
  {
    id: "a-neg",
    group: "A-",
    units: 67,
    status: "ok",
    tone: "rose",
  },
  {
    id: "b-neg",
    group: "B-",
    units: 34,
    status: "low",
    tone: "blue",
  },
  {
    id: "ab-neg",
    group: "AB-",
    units: 18,
    status: "low",
    tone: "blue",
  },
  {
    id: "o-neg",
    group: "O-",
    units: 54,
    status: "ok",
    tone: "rose",
  },
];

export const bloodGroupInventorySummary: BloodGroupInventorySummary = {
  totalUnits: 342,
  sufficientGroups: 6,
  lowStockGroups: 2,
  criticalGroups: 1,
};

export const bloodGroupStatusLabels: Record<BloodGroupStockStatus, string> = {
  ok: "OK",
  low: "Low",
  critical: "Critical",
};
