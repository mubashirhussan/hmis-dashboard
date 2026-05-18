import { OverviewDataTableCard } from "@/features/overview/components/overview-data-table-card";
import {
  collectionCentersRows,
  corporateClientsRows,
} from "@/features/overview/config/overview-tables-data";

export function OverviewTablesSection() {
  return (
    <section
      className="overview-insights overview-tables"
      aria-label="Overview tables"
    >
      <OverviewDataTableCard
        title="Corporate Clients"
        nameColumnLabel="Panels"
        rows={corporateClientsRows}
      />
      <OverviewDataTableCard
        title="Collection Centers"
        nameColumnLabel="Center"
        rows={collectionCentersRows}
      />
    </section>
  );
}
