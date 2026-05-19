import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import { bloodBankInventoryRows } from "@/features/blood-bank/config/blood-bank-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

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
      <div className="lab-table-scroll">
        <table className="lab-data-table blood-bank-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" className="lab-data-table__th--left">
                Patient
              </th>
              <th scope="col">Units</th>
              <th scope="col">Group</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {bloodBankInventoryRows.map((row) => (
              <tr key={row.id}>
                <td className="lab-data-table__td--strong">{row.requestId}</td>
                <td className="lab-data-table__td--left">{row.patient}</td>
                <td>{row.units}</td>
                <td>
                  <span className="blood-group-badge">{row.group}</span>
                </td>
                <td>{row.time}</td>
                <td>
                  <span
                    className={`lab-status-badge lab-status-badge--${row.status}`}
                  >
                    {row.status === "processing" ? "Processing" : "Completed"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardPanel>
  );
}
