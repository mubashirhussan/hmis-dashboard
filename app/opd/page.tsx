import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { OpdDashboard } from "@/features/opd/opd-dashboard";

export default function OpdPage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <OpdDashboard />
    </Suspense>
  );
}
