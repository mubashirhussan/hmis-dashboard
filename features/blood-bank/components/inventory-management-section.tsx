import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import { bloodBankInventoryRows } from "@/features/blood-bank/config/blood-bank-insights-data";
import {
  DashboardDataTable,
  type DashboardTableColumn,
} from "@/features/shared/components/dashboard-data-table";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

const INVENTORY_COLUMNS: DashboardTableColumn[] = [
  { key: "requestId", label: "ID" },
  { key: "patient", label: "Patient" },
  { key: "units", label: "Units" },
  { key: "group", label: "Group" },
  { key: "time", label: "Time" },
  { key: "status", label: "Status" },
];

export function InventoryManagementSection() {
  return (
    <DashboardPanel
      className="blood-bank-panel"
      title="Inventory, cross-matching, donor management"
      icon={
        <FolderOutlineIcon
          height="24"
          width="24"
          style={{ color: "#ffffff" }}
          aria-hidden
        />
      }
    >
      <DashboardDataTable
        ariaLabel="Blood bank inventory"
        columnCount={6}
        columns={INVENTORY_COLUMNS}
        rows={bloodBankInventoryRows.map((row) => ({
          id: row.id,
          requestId: row.requestId,
          patient: row.patient,
          units: row.units,
          group: <span className="blood-group-badge">{row.group}</span>,
          time: row.time,
          status: (
            <span
              className={`lab-status-badge lab-status-badge--${row.status}`}
            >
              {row.status === "processing" ? "Processing" : "Completed"}
            </span>
          ),
        }))}
      />
    </DashboardPanel>
  );
}
