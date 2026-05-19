import ImageFilterCenterFocusIcon from "@iconify-react/mdi/image-filter-center-focus";
import { ImagingDataTable } from "@/features/imaging/components/imaging-data-table";
import { radiologyReportingRows } from "@/features/imaging/config/imaging-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

const REPORTING_COLUMNS = [
  { key: "test", label: "Test", align: "left" as const },
  { key: "done", label: "Done" },
  { key: "performed", label: "Performed" },
  { key: "tat", label: "TAT" },
  { key: "pending", label: "Pending" },
];

export function RadiologyReportingSection() {
  return (
    <DashboardPanel
      className="imaging-panel"
      title="Radiology Reporting"
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
        variant="reporting"
        ariaLabel="Radiology reporting"
        columns={REPORTING_COLUMNS}
        rows={radiologyReportingRows}
      />
    </DashboardPanel>
  );
}
