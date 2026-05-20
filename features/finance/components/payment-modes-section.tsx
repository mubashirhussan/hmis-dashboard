import { paymentModeRows } from "@/features/finance/config/finance-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import StopHexagonSolidIcon from '@iconify-react/mynaui/stop-hexagon-solid';

export function PaymentModesSection() {
  return (
    <DashboardPanel
      className="finance-panel finance-panel--payment"
      title="Payment Modes"
      icon={
         <StopHexagonSolidIcon
          height="39"
         color="white"
        />
      }
    >
      <ul className="finance-payment-modes">
        {paymentModeRows.map((row) => (
          <li key={row.id} className="finance-payment-modes__row">
            <span className="finance-payment-modes__label">{row.label}</span>
            <div className="finance-payment-modes__bar-wrap">
              <div className="finance-payment-modes__track">
                <span
                  className={[
                    "finance-payment-modes__fill",
                    row.tone === "panel" && "finance-payment-modes__fill--panel",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ width: `${row.percent}%` }}
                >
                  <span className="finance-payment-modes__percent">
                    {row.percent}%
                  </span>
                </span>
              </div>
            </div>
            <span className="finance-payment-modes__value">{row.value}</span>
          </li>
        ))}
      </ul>
    </DashboardPanel>
  );
}
