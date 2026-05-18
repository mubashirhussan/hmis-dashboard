import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import { riderTrackingRows } from "@/features/laboratory/config/laboratory-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

export function RiderTrackingSection() {
  return (
    <DashboardPanel
      className="lab-panel"
      title="Rider Tracking"
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
        <table className="lab-data-table">
          <thead>
            <tr>
              <th scope="col" className="lab-data-table__th--left">
                Rider Name
              </th>
              <th scope="col" className="lab-data-table__th--left">
                Location
              </th>
              <th scope="col">Arrival Time</th>
              <th scope="col">Exit Time</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {riderTrackingRows.map((row) => (
              <tr key={row.id}>
                <td className="lab-data-table__td--left lab-data-table__td--strong">
                  {row.riderName}
                </td>
                <td className="lab-data-table__td--left">{row.location}</td>
                <td>{row.arrivalTime}</td>
                <td>{row.exitTime}</td>
                <td>{row.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardPanel>
  );
}
