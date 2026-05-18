export type WorkloadTone =
  | "blue"
  | "rose"
  | "green"
  | "orange"
  | "pink"
  | "purple";

export type WorkloadDepartmentIcon =
  | "chemistry"
  | "hematology"
  | "microbiology"
  | "serology"
  | "blood-bank"
  | "xray"
  | "ct-mri"
  | "ultrasound";

export type DepartmentWorkloadItem = {
  id: string;
  label: string;
  total: number;
  pending: number;
  tone: WorkloadTone;
  icon: WorkloadDepartmentIcon;
  highlighted?: boolean;
};

export const departmentWorkloadItems: DepartmentWorkloadItem[] = [
  {
    id: "chemistry",
    label: "Chemistry",
    total: 412,
    pending: 31,
    tone: "blue",
    icon: "chemistry",
    highlighted: true,
  },
  {
    id: "hematology",
    label: "Hematology",
    total: 287,
    pending: 18,
    tone: "rose",
    icon: "hematology",
  },
  {
    id: "microbiology",
    label: "Microbiology",
    total: 94,
    pending: 7,
    tone: "green",
    icon: "microbiology",
  },
  {
    id: "serology",
    label: "Serology",
    total: 112,
    pending: 3,
    tone: "orange",
    icon: "serology",
  },
  {
    id: "blood-bank",
    label: "Blood Bank",
    total: 287,
    pending: 18,
    tone: "rose",
    icon: "blood-bank",
  },
  {
    id: "xray",
    label: "X-Ray",
    total: 112,
    pending: 3,
    tone: "orange",
    icon: "xray",
  },
  {
    id: "ct-mri",
    label: "CT/MRI",
    total: 43,
    pending: 7,
    tone: "pink",
    icon: "ct-mri",
  },
  {
    id: "ultrasound",
    label: "Ultrasound",
    total: 68,
    pending: 5,
    tone: "purple",
    icon: "ultrasound",
  },
];
