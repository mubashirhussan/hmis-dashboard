"use client";

import { useState } from "react";
import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import { LabTestStatusModal } from "@/features/laboratory/components/lab-test-status-modal";
import {
  getSectionTatTone,
  labTestStatusBySection,
  sectionWorkloadRows,
  type SectionWorkloadRow,
} from "@/features/laboratory/config/laboratory-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

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
          <FolderOutlineIcon
            height="24"
            width="24"
            style={{ color: "#ffffff" }}
            aria-hidden
          />
        }
      >
        <div className="lab-table-scroll">
          <table className="lab-data-table lab-section-workload-table">
            <thead>
              <tr>
                <th scope="col" className="lab-data-table__th--left">
                  Section
                </th>
                <th scope="col">Received</th>
                <th scope="col">Done</th>
                <th scope="col">Pending</th>
                <th scope="col">TAT</th>
              </tr>
            </thead>
            <tbody>
              {sectionWorkloadRows.map((row) => {
                const tone = getSectionTatTone(row.tat);

                return (
                  <tr key={row.id}>
                    <td className="lab-data-table__td--left">
                      <button
                        type="button"
                        className="lab-section-workload-table__row-btn"
                        onClick={() => setSelectedSection(row)}
                      >
                        {row.section}
                      </button>
                    </td>
                    <td>{row.received}</td>
                    <td>{row.done}</td>
                    <td>{row.pending}</td>
                    <td>
                      <span className={`lab-tat-ring lab-tat-ring--${tone}`}>
                        {row.tat}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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
