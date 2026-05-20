"use client";

import { useEffect } from "react";
import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import CloseIcon from "@iconify-react/mdi/close";
import {
  getSectionTatTone,
  type LabTestStatusRow,
  type SectionWorkloadRow,
} from "@/features/laboratory/config/laboratory-insights-data";
import {
  DashboardDataTable,
  type DashboardTableColumn,
} from "@/features/shared/components/dashboard-data-table";

const LAB_TEST_STATUS_COLUMNS: DashboardTableColumn[] = [
  { key: "test", label: "Section" },
  { key: "received", label: "Received" },
  { key: "done", label: "Done" },
  { key: "tat", label: "TAT", cellType: "tat" },
  { key: "pending", label: "Pending", cellType: "pending" },
];

type LabTestStatusModalProps = {
  section: SectionWorkloadRow;
  rows: LabTestStatusRow[];
  onClose: () => void;
};

export function LabTestStatusModal({
  section,
  rows,
  onClose,
}: LabTestStatusModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="lab-modal-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="lab-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lab-test-status-title"
        aria-describedby="lab-test-status-desc"
        onClick={(event) => event.stopPropagation()}
      >
        <p id="lab-test-status-desc" className="sr-only">
          Test breakdown for {section.section}
        </p>
        <header className="lab-modal__header">
          <div className="lab-modal__header-main">
            <div className="lab-modal__icon" aria-hidden>
              <FolderOutlineIcon
                height="24"
                width="24"
                style={{ color: "#ffffff" }}
              />
            </div>
            <h2 id="lab-test-status-title" className="lab-modal__title">
              Lab Test Status
            </h2>
          </div>
          <button
            type="button"
            className="lab-modal__close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <CloseIcon height="22" width="22" aria-hidden />
          </button>
        </header>

        <div className="lab-modal__table-wrap">
          <DashboardDataTable
            ariaLabel={`Lab test status for ${section.section}`}
            columns={LAB_TEST_STATUS_COLUMNS}
            rows={rows.map((row) => {
              const tone = getSectionTatTone(row.tat);

              return {
                id: row.id,
                test: row.test,
                received: row.received,
                done: row.done,
                tat: (
                  <span
                    className={`overview-table__tat overview-table__tat--${tone}`}
                  >
                    {row.tat}%
                  </span>
                ),
                pending: row.pending,
              };
            })}
          />
        </div>
      </div>
    </div>
  );
}
