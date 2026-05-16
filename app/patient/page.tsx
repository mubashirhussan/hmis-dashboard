import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { PatientDashboard } from "@/features/patient/patient-dashboard";

export default function PatientPage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <PatientDashboard />
    </Suspense>
  );
}
