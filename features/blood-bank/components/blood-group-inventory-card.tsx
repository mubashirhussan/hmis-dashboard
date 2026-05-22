import AlertIcon from "@iconify-react/mdi/alert";
import CheckCircleIcon from "@iconify-react/mdi/check-circle";
import AlertDecagramIcon from "@iconify-react/mdi/alert-decagram";
import { Droplet } from "lucide-react";
import type { BloodGroupInventoryItem } from "@/features/blood-bank/config/blood-group-inventory-data";
import { bloodGroupStatusLabels } from "@/features/blood-bank/config/blood-group-inventory-data";
          import DropIcon from '@iconify-react/mdi/drop';

type BloodGroupInventoryCardProps = {
  item: BloodGroupInventoryItem;
};

function StatusIcon({ status }: { status: BloodGroupInventoryItem["status"] }) {
  const className = "blood-group-card__status-icon";

  if (status === "ok") {
    return <CheckCircleIcon className={className} aria-hidden />;
  }

  if (status === "low") {
    return <AlertIcon className={className} aria-hidden />;
  }

  return <AlertDecagramIcon className={className} aria-hidden />;
}

export function BloodGroupInventoryCard({ item }: BloodGroupInventoryCardProps) {
  return (
    <article
      className={[
        "workload-dept-card",
        `workload-dept-card--${item.tone}`,
        item.highlighted ? "workload-dept-card--highlighted" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="workload-dept-card__icon-wrap" aria-hidden>
        <span className="workload-dept-card__icon-inner">
          <DropIcon className="workload-dept-card__icon-svg" strokeWidth={2} aria-hidden />

        </span>
      </div>

      <p className="workload-dept-card__label">{item.group}</p>
      <p className="workload-dept-card__value">{item.units}</p>

      <div
        className={[
          "workload-dept-card__pending",
          `workload-dept-card__pending--${item.status}`,
        ].join(" ")}
      >
        <StatusIcon status={item.status} />
        <span className="workload-dept-card__pending-text">
          {bloodGroupStatusLabels[item.status]}
        </span>
      </div>

      <span className="workload-dept-card__accent" aria-hidden />
    </article>
  );
}
