import CollectionFillIcon from "@iconify-react/bi/collection-fill";

import { riderTrackingRows } from "@/features/laboratory/config/laboratory-insights-data";
import {
  DashboardDataTable,
  type DashboardTableColumn,
} from "@/features/shared/components/dashboard-data-table";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

const RIDER_TRACKING_COLUMNS: DashboardTableColumn[] = [
  { key: "riderName", label: "Rider Name" },
  { key: "location", label: "Location" },
  { key: "arrivalTime", label: "Arrival Time" },
  { key: "exitTime", label: "Exit Time" },
  { key: "quantity", label: "Quantity" },
];

export function RiderTrackingSection() {
  return (
    <DashboardPanel
      className="lab-panel"
      title="Rider Tracking"
      icon={
       <CollectionFillIcon height="39" color="white" />
      }
    >
      <DashboardDataTable
        ariaLabel="Rider tracking"
        columns={RIDER_TRACKING_COLUMNS}
        rows={riderTrackingRows.map((row) => ({
          id: row.id,
          riderName: row.riderName,
          location: row.location,
          arrivalTime: row.arrivalTime,
          exitTime: row.exitTime,
          quantity: row.quantity,
        }))}
      />
    </DashboardPanel>
  );
}
