export type DeliveryStatus = "delayed" | "in-time";

export type HomeServiceStatusRow = {
  id: string;
  requestTime: string;
  riderName: string;
  responseTime: string;
  deliveryTime: string;
  status: DeliveryStatus;
};

export const homeServiceStatusRows: HomeServiceStatusRow[] = [
  {
    id: "hs-1",
    requestTime: "2:00 AM",
    riderName: "Ammar",
    responseTime: "10 min",
    deliveryTime: "02:00 PM",
    status: "delayed",
  },
  {
    id: "hs-2",
    requestTime: "3:15 AM",
    riderName: "Bilal",
    responseTime: "8 min",
    deliveryTime: "01:45 PM",
    status: "in-time",
  },
  {
    id: "hs-3",
    requestTime: "4:30 AM",
    riderName: "Usman",
    responseTime: "12 min",
    deliveryTime: "03:10 PM",
    status: "delayed",
  },
  {
    id: "hs-4",
    requestTime: "5:00 AM",
    riderName: "Hamza",
    responseTime: "6 min",
    deliveryTime: "12:30 PM",
    status: "in-time",
  },
  {
    id: "hs-5",
    requestTime: "6:20 AM",
    riderName: "Zain",
    responseTime: "9 min",
    deliveryTime: "02:15 PM",
    status: "in-time",
  },
];

export type VisitTone = "orange" | "blue" | "purple" | "green";

export type UpcomingVisit = {
  id: string;
  patient: string;
  service: string;
  location: string;
  tests: string;
  time: string;
  tone: VisitTone;
};

export const upcomingVisits: UpcomingVisit[] = [
  {
    id: "visit-1",
    patient: "Nadia Pervaiz",
    service: "Lab Panel",
    location: "Gulshan Block 5",
    tests: "CBC + LFTs + RFTs",
    time: "11:30 AM",
    tone: "orange",
  },
  {
    id: "visit-2",
    patient: "Ahmed Raza",
    service: "Ultrasound",
    location: "DHA Phase 6",
    tests: "Abdominal Scan",
    time: "12:15 PM",
    tone: "blue",
  },
  {
    id: "visit-3",
    patient: "Sana Malik",
    service: "X-Ray",
    location: "Clifton Block 2",
    tests: "Chest PA View",
    time: "01:00 PM",
    tone: "purple",
  },
  {
    id: "visit-4",
    patient: "Imran Khan",
    service: "Home Nursing",
    location: "Bahria Town",
    tests: "Vitals + Dressing",
    time: "02:45 PM",
    tone: "green",
  },
];
