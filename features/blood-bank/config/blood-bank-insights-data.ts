export type BloodBankRequestStatus = "processing" | "completed";

export type BloodBankInventoryRow = {
  id: string;
  requestId: string;
  patient: string;
  units: number;
  group: string;
  time: string;
  status: BloodBankRequestStatus;
};

export const bloodBankInventoryRows: BloodBankInventoryRow[] = [
  {
    id: "bb-1",
    requestId: "BB-0442",
    patient: "Ahmad Khan",
    units: 2,
    group: "A+",
    time: "35m",
    status: "processing",
  },
  {
    id: "bb-2",
    requestId: "BB-0441",
    patient: "Rabia Rizvi",
    units: 1,
    group: "O+",
    time: "18m",
    status: "completed",
  },
  {
    id: "bb-3",
    requestId: "BB-0440",
    patient: "Hassan Ali",
    units: 3,
    group: "B+",
    time: "5m",
    status: "processing",
  },
  {
    id: "bb-4",
    requestId: "BB-0439",
    patient: "Fatima Noor",
    units: 1,
    group: "AB-",
    time: "42m",
    status: "completed",
  },
];
