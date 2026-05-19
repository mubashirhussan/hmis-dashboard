export type PipelineStageTone =
  | "blue"
  | "purple"
  | "orange"
  | "green"
  | "rose"
  | "slate";

export type PipelineStageIcon =
  | "collection"
  | "received"
  | "result-entry"
  | "approval"
  | "undelivered"
  | "delivered";

export type PipelineStage = {
  id: string;
  label: string;
  value: number;
  tone: PipelineStageTone;
  icon: PipelineStageIcon;
  inProgress?: boolean;
};

export const samplePipelineStages: PipelineStage[] = [
  {
    id: "collection",
    label: "Sample Collection",
    value: 34,
    tone: "blue",
    icon: "collection",
    inProgress: true,
  },
  {
    id: "received",
    label: "Sample Received",
    value: 12,
    tone: "purple",
    icon: "received",
    inProgress: true,
  },
  {
    id: "result-entry",
    label: "Result Entry",
    value: 89,
    tone: "orange",
    icon: "result-entry",
    inProgress: true,
  },
  {
    id: "approval",
    label: "Pathologist Approval",
    value: 45,
    tone: "green",
    icon: "approval",
    inProgress: true,
  },
  {
    id: "undelivered",
    label: "Undelivered Report",
    value: 45,
    tone: "rose",
    icon: "undelivered",
  },
  {
    id: "delivered",
    label: "Delivered Report",
    value: 45,
    tone: "slate",
    icon: "delivered",
  },
];

export const samplePipelineTotal = 1247;

export type CriticalValueStatus = "processing" | "completed";

export type CriticalValueRow = {
  id: string;
  order: string;
  patient: string;
  test: string;
  value: string;
  status: CriticalValueStatus;
  informed: boolean;
};

export const criticalValueRows: CriticalValueRow[] = [
  {
    id: "cv-1",
    order: "ORD-001",
    patient: "Ahmad Khan",
    test: "Troponin-I",
    value: "2.4",
    status: "processing",
    informed: true,
  },
  {
    id: "cv-2",
    order: "ORD-002",
    patient: "Sara Malik",
    test: "Potassium",
    value: "6.1",
    status: "processing",
    informed: false,
  },
  {
    id: "cv-3",
    order: "ORD-003",
    patient: "Hassan Ali",
    test: "Glucose",
    value: "42",
    status: "completed",
    informed: true,
  },
  {
    id: "cv-4",
    order: "ORD-004",
    patient: "Fatima Noor",
    test: "Hb",
    value: "6.8",
    status: "completed",
    informed: true,
  },
];

export type RiderTrackingRow = {
  id: string;
  riderName: string;
  location: string;
  arrivalTime: string;
  exitTime: string;
  quantity: number;
};

export const riderTrackingRows: RiderTrackingRow[] = [
  {
    id: "rider-1",
    riderName: "Ammar",
    location: "farida yaqoob center",
    arrivalTime: "12:00 AM",
    exitTime: "12:00 PM",
    quantity: 20,
  },
  {
    id: "rider-2",
    riderName: "Bilal",
    location: "Gulshan Collection Point",
    arrivalTime: "08:30 AM",
    exitTime: "10:15 AM",
    quantity: 14,
  },
  {
    id: "rider-3",
    riderName: "Usman",
    location: "North Nazimabad Hub",
    arrivalTime: "09:00 AM",
    exitTime: "11:45 AM",
    quantity: 18,
  },
  {
    id: "rider-4",
    riderName: "Zain",
    location: "Clifton Branch",
    arrivalTime: "07:45 AM",
    exitTime: "09:30 AM",
    quantity: 11,
  },
];

export type SectionWorkloadRow = {
  id: string;
  section: string;
  received: number;
  done: number;
  pending: number;
  tat: number;
};

export const sectionWorkloadRows: SectionWorkloadRow[] = [
  {
    id: "chemistry",
    section: "Chemistry",
    received: 234,
    done: 123,
    pending: 123,
    tat: 94,
  },
  {
    id: "hematology",
    section: "Hematology",
    received: 198,
    done: 156,
    pending: 42,
    tat: 96,
  },
  {
    id: "microbiology",
    section: "Microbiology",
    received: 94,
    done: 72,
    pending: 22,
    tat: 88,
  },
  {
    id: "immunoassay",
    section: "Immunoassay",
    received: 112,
    done: 98,
    pending: 14,
    tat: 95,
  },
  {
    id: "histopathology",
    section: "Histopathology",
    received: 67,
    done: 51,
    pending: 16,
    tat: 91,
  },
];

export function getSectionTatTone(value: number): "good" | "warn" | "bad" {
  if (value >= 90) return "good";
  if (value >= 75) return "warn";
  return "bad";
}

export type LabTestStatusRow = {
  id: string;
  test: string;
  received: number;
  done: number;
  tat: number;
  pending: number;
};

export const labTestStatusBySection: Record<string, LabTestStatusRow[]> = {
  chemistry: [
    { id: "chem-1", test: "Glucose", received: 82, done: 80, tat: 97, pending: 2 },
    { id: "chem-2", test: "Creatinine", received: 64, done: 62, tat: 96, pending: 2 },
    { id: "chem-3", test: "Urea", received: 58, done: 55, tat: 78, pending: 3 },
    { id: "chem-4", test: "Electrolytes", received: 45, done: 44, tat: 98, pending: 1 },
    { id: "chem-5", test: "Lipid Profile", received: 39, done: 37, tat: 95, pending: 2 },
  ],
  hematology: [
    { id: "hema-1", test: "CBC", received: 57, done: 57, tat: 97, pending: 0 },
    { id: "hema-2", test: "ESR", received: 49, done: 49, tat: 97, pending: 0 },
    { id: "hema-3", test: "LFT", received: 44, done: 41, tat: 78, pending: 3 },
    { id: "hema-4", test: "RFT", received: 38, done: 36, tat: 94, pending: 2 },
    { id: "hema-5", test: "HB", received: 52, done: 50, tat: 96, pending: 2 },
  ],
  microbiology: [
    { id: "micro-1", test: "Culture", received: 32, done: 28, tat: 88, pending: 4 },
    { id: "micro-2", test: "Gram Stain", received: 24, done: 23, tat: 96, pending: 1 },
    { id: "micro-3", test: "AFB", received: 18, done: 15, tat: 82, pending: 3 },
    { id: "micro-4", test: "Fungal", received: 12, done: 11, tat: 91, pending: 1 },
    { id: "micro-5", test: "Sensitivity", received: 8, done: 7, tat: 87, pending: 1 },
  ],
  immunoassay: [
    { id: "imm-1", test: "TSH", received: 41, done: 40, tat: 98, pending: 1 },
    { id: "imm-2", test: "HIV", received: 28, done: 28, tat: 99, pending: 0 },
    { id: "imm-3", test: "HbsAg", received: 35, done: 33, tat: 94, pending: 2 },
    { id: "imm-4", test: "Vitamin D", received: 22, done: 20, tat: 76, pending: 2 },
    { id: "imm-5", test: "PSA", received: 16, done: 15, tat: 93, pending: 1 },
  ],
  histopathology: [
    { id: "histo-1", test: "Biopsy", received: 24, done: 20, tat: 84, pending: 4 },
    { id: "histo-2", test: "FNAC", received: 18, done: 16, tat: 89, pending: 2 },
    { id: "histo-3", test: "Pap Smear", received: 14, done: 13, tat: 92, pending: 1 },
    { id: "histo-4", test: "IHC", received: 8, done: 6, tat: 75, pending: 2 },
    { id: "histo-5", test: "Special Stain", received: 11, done: 10, tat: 91, pending: 1 },
  ],
};
