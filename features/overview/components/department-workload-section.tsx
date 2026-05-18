import MedicalBagIcon from "@iconify-react/mdi/medical-bag";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import { PanelViewAllButton } from "@/features/shared/components/panel-view-all-button";
import { WorkloadDepartmentCard } from "@/features/overview/components/workload-department-card";
import { departmentWorkloadItems } from "@/features/overview/config/overview-workload-data";

export function DepartmentWorkloadSection() {
  return (
    <section className="overview-workload" aria-label="Department workload">
      <DashboardPanel
        className="overview-workload-panel"
        title="Department of Workload"
        icon={
          <MedicalBagIcon
            height="24"
            style={{ color: "#ffffff" }}
            aria-hidden
          />
        }
        action={<PanelViewAllButton />}
      >
        <ul className="overview-workload__grid">
          {departmentWorkloadItems.map((department) => (
            <li key={department.id}>
              <WorkloadDepartmentCard department={department} />
            </li>
          ))}
        </ul>
      </DashboardPanel>
    </section>
  );
}
