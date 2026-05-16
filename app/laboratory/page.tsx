import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { LaboratoryDashboard } from "@/features/laboratory/laboratory-dashboard";

export default function LaboratoryPage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <LaboratoryDashboard />
    </Suspense>
  );
}
