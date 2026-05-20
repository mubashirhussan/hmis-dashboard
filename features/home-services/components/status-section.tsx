import HomeHealthIcon from "@iconify-react/material-symbols-light/home-health";
import { homeServiceStatusRows } from "@/features/home-services/config/home-services-insights-data";
import {
  DashboardDataTable,
  type DashboardTableColumn,
} from "@/features/shared/components/dashboard-data-table";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import { PanelViewAllButton } from "@/features/shared/components/panel-view-all-button";
import ICareStaffAreaIcon from '@iconify-react/medical-icon/i-care-staff-area';

const STATUS_COLUMNS: DashboardTableColumn[] = [
  { key: "requestTime", label: "Request Time" },
  { key: "riderName", label: "Rider Name" },
  { key: "responseTime", label: "Response Time" },
  { key: "deliveryTime", label: "Delivery Time" },
  { key: "status", label: "Status" },
];

export function StatusSection() {
  return (
    <DashboardPanel
      className="hs-panel hs-panel--status"
      title="Status"
      icon={
        <ICareStaffAreaIcon
          height="39"
          color="white"
        />
      }
      action={<PanelViewAllButton />}
    >
      <DashboardDataTable
        ariaLabel="Home service status"
        columns={STATUS_COLUMNS}
        rows={homeServiceStatusRows.map((row) => ({
          id: row.id,
          requestTime: row.requestTime,
          riderName: row.riderName,
          responseTime: row.responseTime,
          deliveryTime: (
            <span className="hs-status-table__delivery">{row.deliveryTime}</span>
          ),
          status: (
            <span
              className={`hs-status-badge hs-status-badge--${row.status}`}
            >
              {row.status === "delayed" ? "Delayed" : "In time"}
            </span>
          ),
        }))}
      />
    </DashboardPanel>
  );
}
