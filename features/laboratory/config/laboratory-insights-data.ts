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
