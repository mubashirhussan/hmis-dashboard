"use client";

import { useEffect } from "react";
import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import CloseIcon from "@iconify-react/mdi/close";
import {
  getSectionTatTone,
  type LabTestStatusRow,
  type SectionWorkloadRow,
} from "@/features/laboratory/config/laboratory-insights-data";

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
          <table className="lab-modal-table">
            <thead>
              <tr>
                <th scope="col" className="lab-modal-table__th--left">
                  Section
                </th>
                <th scope="col">Received</th>
                <th scope="col">Done</th>
                <th scope="col">TAT</th>
                <th scope="col">Pending</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const tone = getSectionTatTone(row.tat);

                return (
                  <tr key={row.id}>
                    <td className="lab-modal-table__td--left lab-modal-table__td--strong">
                      {row.test}
                    </td>
                    <td>{row.received}</td>
                    <td>{row.done}</td>
                    <td>
                      <span
                        className={`lab-test-tat-badge lab-test-tat-badge--${tone}`}
                      >
                        {row.tat}%
                      </span>
                    </td>
                    <td className="lab-modal-table__td--pending">
                      {row.pending}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
