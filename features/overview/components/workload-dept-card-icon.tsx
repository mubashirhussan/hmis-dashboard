import workloadDeptSvgPaths from "@/features/overview/components/workload-dept-svg-paths";
import { WorkloadDepartmentIconView } from "@/features/overview/components/workload-department-icons";
import type { WorkloadDepartmentIcon } from "@/features/overview/config/overview-workload-data";

type WorkloadDeptCardIconProps = {
  icon: WorkloadDepartmentIcon;
};

export function WorkloadDeptCardIcon({ icon }: WorkloadDeptCardIconProps) {
  // if (icon === "chemistry") {
  //   return (
  //     <span className="workload-dept-card__icon-inner" aria-hidden>
  //       <svg
  //         className="workload-dept-card__icon-svg"
  //         viewBox="0 0 32 32"
  //         fill="none"
  //         preserveAspectRatio="xMidYMid meet"
  //         aria-hidden
  //       >
  //         <path
  //           d={workloadDeptSvgPaths.chemistryIcon}
  //           fill="currentColor"
  //         />
  //       </svg>
  //     </span>
  //   );
  // }

  return (
    <span className="workload-dept-card__icon-inner" aria-hidden>
      <WorkloadDepartmentIconView
        icon={icon}
        className="workload-dept-card__icon-svg"
      />
    </span>
  );
}
