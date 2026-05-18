export type OverviewTableRow = {
  id: string;
  name: string;
  samples: number;
  tat: number;
  done: number;
  pending: number;
};

export const corporateClientsRows: OverviewTableRow[] = [
  {
    id: "main-karachi",
    name: "Main-Karachi",
    samples: 234,
    tat: 94,
    done: 220,
    pending: 14,
  },
  {
    id: "engro",
    name: "Engro Corp",
    samples: 189,
    tat: 96,
    done: 181,
    pending: 8,
  },
  {
    id: "lucky-cement",
    name: "Lucky Cement",
    samples: 156,
    tat: 88,
    done: 137,
    pending: 19,
  },
  {
    id: "packages",
    name: "Packages Ltd",
    samples: 98,
    tat: 96,
    done: 94,
    pending: 4,
  },
  {
    id: "hbl",
    name: "HBL Panel",
    samples: 87,
    tat: 72,
    done: 63,
    pending: 24,
  },
];

export const collectionCentersRows: OverviewTableRow[] = [
  {
    id: "cc-gulshan",
    name: "CC-Gulshan",
    samples: 198,
    tat: 94,
    done: 186,
    pending: 12,
  },
  {
    id: "cc-clifton",
    name: "CC-Clifton",
    samples: 167,
    tat: 96,
    done: 160,
    pending: 7,
  },
  {
    id: "cc-north",
    name: "CC-North Nazimabad",
    samples: 143,
    tat: 91,
    done: 130,
    pending: 13,
  },
  {
    id: "cc-hyderabad",
    name: "CC-Hyderabad",
    samples: 112,
    tat: 85,
    done: 95,
    pending: 17,
  },
  {
    id: "cc-multan",
    name: "CC-Multan",
    samples: 76,
    tat: 78,
    done: 59,
    pending: 17,
  },
];

export function getTatBadgeTone(value: number): "good" | "warn" | "bad" {
  if (value >= 90) return "good";
  if (value >= 75) return "warn";
  return "bad";
}
