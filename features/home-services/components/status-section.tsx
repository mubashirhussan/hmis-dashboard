import HomeHealthIcon from "@iconify-react/material-symbols-light/home-health";
import { homeServiceStatusRows } from "@/features/home-services/config/home-services-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import { PanelViewAllButton } from "@/features/shared/components/panel-view-all-button";

export function StatusSection() {
  return (
    <DashboardPanel
      className="hs-panel hs-panel--status"
      title="Status"
      icon={
        <HomeHealthIcon
          height="24"
          width="24"
          style={{ color: "#ffffff" }}
          aria-hidden
        />
      }
      action={<PanelViewAllButton />}
    >
      <div className="lab-table-scroll">
        <table className="lab-data-table hs-status-table">
          <thead>
            <tr>
              <th scope="col">Request Time</th>
              <th scope="col" className="lab-data-table__th--left">
                Rider Name
              </th>
              <th scope="col">Response Time</th>
              <th scope="col">Delivery Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {homeServiceStatusRows.map((row) => (
              <tr key={row.id}>
                <td className="lab-data-table__td--strong">{row.requestTime}</td>
                <td className="lab-data-table__td--left lab-data-table__td--strong">
                  {row.riderName}
                </td>
                <td>{row.responseTime}</td>
                <td className="hs-status-table__delivery">{row.deliveryTime}</td>
                <td>
                  <span
                    className={`hs-status-badge hs-status-badge--${row.status}`}
                  >
                    {row.status === "delayed" ? "Delayed" : "In time"}
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
