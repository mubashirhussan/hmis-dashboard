export type PatientDistributionSegment = {
  id: string;
  label: string;
  value: number;
  color: string;
};

export const patientDistributionSegments: PatientDistributionSegment[] = [
  { id: "opd", label: "OPD Walk-In", value: 218, color: "#7cb9e8" },
  { id: "ipd", label: "IPD Inpatient", value: 87, color: "#026bb1" },
  { id: "er", label: "ER Emergency", value: 42, color: "#ef4444" },
  { id: "panel", label: "Panel / Corporate", value: 56, color: "#8b5cf6" },
  { id: "home", label: "Home Collection", value: 23, color: "#14b8a6" },
  { id: "referral", label: "Referral", value: 12, color: "#f59e0b" },
];

export const patientDistributionTotal = patientDistributionSegments.reduce(
  (sum, segment) => sum + segment.value,
  0,
);

export type TatComplianceRow = {
  id: string;
  label: string;
  value: number;
  target: string;
};

export const tatComplianceRows: TatComplianceRow[] = [
  { id: "chemistry", label: "Chemistry", value: 92, target: "≤ 2hr" },
  { id: "hematology", label: "Hematology", value: 97, target: "≤ 1hr" },
  { id: "microbiology", label: "Microbiology", value: 78, target: "≤ 48hr" },
  { id: "ultrasound", label: "Ultrasound", value: 95, target: "≤ 30m" },
  { id: "xray", label: "X-Ray", value: 98, target: "≤ 20m" },
  { id: "ct-mri", label: "CT / MRI", value: 84, target: "≤ 1hr" },
  { id: "blood-bank", label: "Blood Bank", value: 71, target: "≤ 45m" },
];

export function getTatBarTone(value: number): "good" | "warn" | "bad" {
  if (value >= 90) return "good";
  if (value >= 75) return "warn";
  return "bad";
}
