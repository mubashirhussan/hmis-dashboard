import AlertIcon from "@iconify-react/mdi/alert";
import AlertDecagramIcon from "@iconify-react/mdi/alert-decagram";
import PackageVariantIcon from "@iconify-react/mdi/package-variant";
import ShieldCheckIcon from "@iconify-react/mdi/shield-check";
import type { BloodGroupInventorySummary } from "@/features/blood-bank/config/blood-group-inventory-data";

type BloodGroupInventorySummaryProps = {
  summary: BloodGroupInventorySummary;
};

const summaryItems = [
  {
    key: "total",
    title: "Total Units",
    icon: PackageVariantIcon,
    tone: "blue",
    getValue: (s: BloodGroupInventorySummary) => s.totalUnits,
    getLabel: () => "All Blood Groups",
  },
  {
    key: "sufficient",
    title: "Sufficient",
    icon: ShieldCheckIcon,
    tone: "green",
    getValue: (s: BloodGroupInventorySummary) => s.sufficientGroups,
    getLabel: () => "Groups",
  },
  {
    key: "low",
    title: "Low Stock",
    icon: AlertIcon,
    tone: "orange",
    getValue: (s: BloodGroupInventorySummary) => s.lowStockGroups,
    getLabel: () => "Groups",
  },
  {
    key: "critical",
    title: "Critical",
    icon: AlertDecagramIcon,
    tone: "red",
    getValue: (s: BloodGroupInventorySummary) => s.criticalGroups,
    getLabel: () => "Group",
  },
] as const;

export function BloodGroupInventorySummaryBar({
  summary,
}: BloodGroupInventorySummaryProps) {
  return (
    <div className="blood-group-inventory__summary" role="group" aria-label="Inventory summary">
      {summaryItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.key}
            className={[
              "blood-group-inventory__summary-item",
              index > 0 ? "blood-group-inventory__summary-item--bordered" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span
              className={`blood-group-inventory__summary-icon blood-group-inventory__summary-icon--${item.tone}`}
              aria-hidden
            >
              <Icon height="22" width="22" />
            </span>
            <div className="blood-group-inventory__summary-body">
              <p className="blood-group-inventory__summary-title">{item.title}</p>
              <p
                className={[
                  "blood-group-inventory__summary-value",
                  `blood-group-inventory__summary-value--${item.tone}`,
                ].join(" ")}
              >
                {item.getValue(summary)}
              </p>
              <p className="blood-group-inventory__summary-label">{item.getLabel()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
