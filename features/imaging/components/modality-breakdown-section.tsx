import ImageFilterCenterFocusIcon from "@iconify-react/mdi/image-filter-center-focus";
import { ImagingDataTable } from "@/features/imaging/components/imaging-data-table";
import { modalityBreakdownRows } from "@/features/imaging/config/imaging-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

const MODALITY_COLUMNS = [
  { key: "modality", label: "Modality" },
  { key: "active", label: "Active" },
  { key: "done", label: "Done" },
  { key: "pending", label: "Pending" },
  { key: "tat", label: "TAT" },
];

export function ModalityBreakdownSection() {
  return (
    <DashboardPanel
      className="imaging-panel"
      title="Modality Breakdown"
      icon={
        <ImageFilterCenterFocusIcon
          height="24"
          width="24"
          style={{ color: "#ffffff" }}
          aria-hidden
        />
      }
    >
      <ImagingDataTable
        variant="modality"
        ariaLabel="Modality breakdown"
        columns={MODALITY_COLUMNS}
        rows={modalityBreakdownRows}
      />
    </DashboardPanel>
  );
}
