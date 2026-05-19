import { WorkloadDeptCardIcon } from "@/features/overview/components/workload-dept-card-icon";
import type { DepartmentWorkloadItem } from "@/features/overview/config/overview-workload-data";

type WorkloadDepartmentCardProps = {
  department: DepartmentWorkloadItem;
};

export function WorkloadDepartmentCard({
  department,
}: WorkloadDepartmentCardProps) {
  const pendingLabel = `${String(department.pending).padStart(2, "0")} pending`;

  return (
    <article
      className={[
        "workload-dept-card",
        `workload-dept-card--${department.tone}`,
      ].join(" ")}
    >
      <div className="workload-dept-card__icon-wrap" aria-hidden>
        <WorkloadDeptCardIcon icon={department.icon} />
      </div>

      <p className="workload-dept-card__label">{department.label}</p>
      <p className="workload-dept-card__value">{department.total}</p>

      <div className="workload-dept-card__pending">
        <svg
          className="workload-dept-card__pending-dot"
          viewBox="0 0 11 11"
          fill="none"
          aria-hidden
        >
          <circle cx="5.5" cy="5.5" r="5.5" fill="currentColor" />
        </svg>
        <span className="workload-dept-card__pending-text">{pendingLabel}</span>
      </div>

      <span className="workload-dept-card__accent" aria-hidden />
    </article>
  );
}
