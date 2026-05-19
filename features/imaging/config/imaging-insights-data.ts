export type ModalityBreakdownRow = {
  id: string;
  modality: string;
  active: number;
  done: number;
  pending: number;
  tat: number;
};

export const modalityBreakdownRows: ModalityBreakdownRow[] = [
  {
    id: "ultrasound",
    modality: "Ultrasound",
    active: 5,
    done: 63,
    pending: 31,
    tat: 97,
  },
  {
    id: "xray",
    modality: "X-Ray",
    active: 3,
    done: 109,
    pending: 18,
    tat: 97,
  },
  {
    id: "ct",
    modality: "CT Scan",
    active: 2,
    done: 28,
    pending: 7,
    tat: 97,
  },
  {
    id: "mri",
    modality: "MRI",
    active: 1,
    done: 12,
    pending: 8,
    tat: 97,
  },
  {
    id: "mammography",
    modality: "Mammography",
    active: 0,
    done: 4,
    pending: 3,
    tat: 78,
  },
];

export type RadiologyReportingRow = {
  id: string;
  test: string;
  done: number;
  performed: string;
  tat: number;
  pending: number;
};

export const radiologyReportingRows: RadiologyReportingRow[] = [
  {
    id: "ultrasound",
    test: "Ultrasound",
    done: 63,
    performed: "Hayatabad",
    tat: 97,
    pending: 31,
  },
  {
    id: "xray",
    test: "X-Ray",
    done: 109,
    performed: "Hayatabad",
    tat: 97,
    pending: 18,
  },
  {
    id: "ct",
    test: "CT Scan",
    done: 28,
    performed: "Hayatabad",
    tat: 97,
    pending: 7,
  },
  {
    id: "mri",
    test: "MRI",
    done: 12,
    performed: "Hayatabad",
    tat: 97,
    pending: 8,
  },
  {
    id: "mammography",
    test: "Mammography",
    done: 4,
    performed: "Hayatabad",
    tat: 78,
    pending: 3,
  },
];

export type RadiologistProductivityRow = {
  id: string;
  name: string;
  reports: number;
  progress: number;
  avgMinutes: number;
};

export const radiologistProductivityRows: RadiologistProductivityRow[] = [
  {
    id: "akhtar",
    name: "Dr. Akhtar",
    reports: 44,
    progress: 68,
    avgMinutes: 18,
  },
  {
    id: "naeem",
    name: "Dr. Naeem",
    reports: 48,
    progress: 78,
    avgMinutes: 22,
  },
  {
    id: "sobia",
    name: "Dr. Sobia",
    reports: 38,
    progress: 55,
    avgMinutes: 31,
  },
  {
    id: "hassan",
    name: "Dr. Hassan",
    reports: 47,
    progress: 72,
    avgMinutes: 24,
  },
];

export function getImagingTatTone(value: number): "good" | "warn" | "bad" {
  if (value >= 90) return "good";
  if (value >= 75) return "warn";
  return "bad";
}

export function getProductivityBarTone(avgMinutes: number): "good" | "warn" {
  return avgMinutes <= 25 ? "good" : "warn";
}
