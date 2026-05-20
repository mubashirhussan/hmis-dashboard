"use client";

import { useState } from "react";
import CollectionFillIcon from "@iconify-react/bi/collection-fill";

import { LabTestStatusModal } from "@/features/laboratory/components/lab-test-status-modal";
import {
  getSectionTatTone,
  labTestStatusBySection,
  sectionWorkloadRows,
  type SectionWorkloadRow,
} from "@/features/laboratory/config/laboratory-insights-data";
import {
  DashboardDataTable,
  type DashboardTableColumn,
} from "@/features/shared/components/dashboard-data-table";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

const SECTION_WORKLOAD_COLUMNS: DashboardTableColumn[] = [
  { key: "section", label: "Section" },
  { key: "received", label: "Received" },
  { key: "done", label: "Done" },
  { key: "pending", label: "Pending" },
  { key: "tat", label: "TAT", cellType: "tat" },
];

export function SectionWorkloadSection() {
  const [selectedSection, setSelectedSection] =
    useState<SectionWorkloadRow | null>(null);

  const modalRows = selectedSection
    ? labTestStatusBySection[selectedSection.id] ?? []
    : [];

  return (
    <>
      <DashboardPanel
        className="lab-panel"
        title="Section Workload"
        icon={
         <CollectionFillIcon height="39" color="white" />
        }
      >
        <DashboardDataTable
          ariaLabel="Section workload"
          columns={SECTION_WORKLOAD_COLUMNS}
          rows={sectionWorkloadRows.map((row) => {
            const tone = getSectionTatTone(row.tat);

            return {
              id: row.id,
              section: (
                <button
                  type="button"
                  className="dashboard-table__row-btn"
                  onClick={() => setSelectedSection(row)}
                >
                  {row.section}
                </button>
              ),
              received: row.received,
              done: row.done,
              pending: row.pending,
              tat: (
                <span
                  className={`overview-table__tat overview-table__tat--${tone}`}
                >
                  {row.tat}%
                </span>
              ),
            };
          })}
        />
      </DashboardPanel>

      {selectedSection ? (
        <LabTestStatusModal
          section={selectedSection}
          rows={modalRows}
          onClose={() => setSelectedSection(null)}
        />
      ) : null}
    </>
  );
}
