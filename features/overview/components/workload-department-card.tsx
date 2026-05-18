import { WorkloadDepartmentIconView } from "@/features/overview/components/workload-department-icons";
import type { DepartmentWorkloadItem } from "@/features/overview/config/overview-workload-data";

type WorkloadDepartmentCardProps = {
  department: DepartmentWorkloadItem;
};

function formatPending(count: number) {
  return count.toString().padStart(2, "0");
}

export function WorkloadDepartmentCard({ department }: WorkloadDepartmentCardProps) {
  return (
    <article
      className={[
        "workload-dept-card",
        `workload-dept-card--${department.tone}`,
        department.highlighted ? "workload-dept-card--highlighted" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="workload-dept-card__icon-wrap" aria-hidden>
        <WorkloadDepartmentIconView
          icon={department.icon}
          className="workload-dept-card__icon"
        />
      </div>

      <div className="workload-dept-card__body">
        <p className="workload-dept-card__label">{department.label}</p>
        <p className="workload-dept-card__value">{department.total}</p>
      </div>

      <span className="workload-dept-card__pending">
        <span className="workload-dept-card__dot" aria-hidden />
        {formatPending(department.pending)} pending
      </span>

      <span className="workload-dept-card__accent" aria-hidden />
    </article>
  );
}
