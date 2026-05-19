export type OverviewTableRow = {
  id: string;
  name: string;
  samples: number;
  tat: number;
  done: number;
  pending: number;
};

const corporateClientSeed: Omit<OverviewTableRow, "id">[] = [
  {
    name: "Main-Karachi",
    samples: 234,
    tat: 94,
    done: 220,
    pending: 14,
  },
  {
    name: "CC-Gulshan",
    samples: 198,
    tat: 96,
    done: 186,
    pending: 12,
  },
  {
    name: "CC-Clifton",
    samples: 167,
    tat: 96,
    done: 160,
    pending: 7,
  },
  {
    name: "CC-Korangi",
    samples: 143,
    tat: 91,
    done: 130,
    pending: 13,
  },
  {
    name: "CC-Nazimabad",
    samples: 112,
    tat: 85,
    done: 95,
    pending: 17,
  },
  {
    name: "CC-North",
    samples: 98,
    tat: 96,
    done: 94,
    pending: 4,
  },
  {
    name: "Engro Corp",
    samples: 189,
    tat: 96,
    done: 181,
    pending: 8,
  },
  {
    name: "Lucky Cement",
    samples: 156,
    tat: 88,
    done: 137,
    pending: 19,
  },
  {
    name: "Packages Ltd",
    samples: 98,
    tat: 96,
    done: 94,
    pending: 4,
  },
  {
    name: "HBL Panel",
    samples: 87,
    tat: 72,
    done: 63,
    pending: 24,
  },
];

function buildCorporateClientsRows(count: number): OverviewTableRow[] {
  return Array.from({ length: count }, (_, index) => {
    const seed = corporateClientSeed[index % corporateClientSeed.length];
    const cycle = Math.floor(index / corporateClientSeed.length);

    return {
      id: `corporate-client-${index + 1}`,
      name: cycle === 0 ? seed.name : `${seed.name} ${cycle + 1}`,
      samples: Math.max(seed.samples - (index % 7) * 4, 40),
      tat: seed.tat,
      done: Math.max(seed.done - (index % 5) * 2, 20),
      pending: seed.pending + (index % 4),
    };
  });
}

export const corporateClientsRows = buildCorporateClientsRows(100);

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
