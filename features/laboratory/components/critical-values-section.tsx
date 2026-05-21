import CollectionFillIcon from "@iconify-react/bi/collection-fill";

import { criticalValueRows } from "@/features/laboratory/config/laboratory-insights-data";
import {
  DashboardDataTable,
  type DashboardTableColumn,
} from "@/features/shared/components/dashboard-data-table";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

const CRITICAL_VALUES_COLUMNS: DashboardTableColumn[] = [
  { key: "order", label: "Order" },
  { key: "patient", label: "Patient", className: "overview-table__cell--left" },
  { key: "test", label: "Test" },
  { key: "value", label: "Values" },
  { key: "status", label: "Status" },
  { key: "inform", label: "Inform", cellVariant: "emphasis" },
];

export function CriticalValuesSection() {
  return (
    <DashboardPanel
      className="lab-panel"
      title="Critical Values"
      icon={
        <CollectionFillIcon height="39" color="white" />
      }
    >
      <DashboardDataTable
        ariaLabel="Critical values"
        columnCount={6}
        columns={CRITICAL_VALUES_COLUMNS}
        rows={criticalValueRows.map((row) => ({
          id: row.id,
          order: row.order,
          patient: row.patient,
          test: row.test,
          value: row.value,
          status: (
            <span
              className={`lab-status-badge lab-status-badge--${row.status}`}
            >
              {row.status === "processing" ? "Processing" : "Completed"}
            </span>
          ),
          inform: row.informed ? "YES" : "NO",
        }))}
      />
    </DashboardPanel>
  );
}
