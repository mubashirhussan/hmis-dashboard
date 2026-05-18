import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import { criticalValueRows } from "@/features/laboratory/config/laboratory-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

export function CriticalValuesSection() {
  return (
    <DashboardPanel
      className="lab-panel"
      title="Critical Values"
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
              <th scope="col">Order</th>
              <th scope="col" className="lab-data-table__th--left">
                Patient
              </th>
              <th scope="col" className="lab-data-table__th--left">
                Test
              </th>
              <th scope="col">Values</th>
              <th scope="col">Status</th>
              <th scope="col">Inform</th>
            </tr>
          </thead>
          <tbody>
            {criticalValueRows.map((row) => (
              <tr key={row.id}>
                <td className="lab-data-table__td--strong">{row.order}</td>
                <td className="lab-data-table__td--left">{row.patient}</td>
                <td className="lab-data-table__td--left">{row.test}</td>
                <td>{row.value}</td>
                <td>
                  <span
                    className={`lab-status-badge lab-status-badge--${row.status}`}
                  >
                    {row.status === "processing" ? "Processing" : "Completed"}
                  </span>
                </td>
                <td className="lab-data-table__td--strong">
                  {row.informed ? "YES" : "NO"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardPanel>
  );
}
