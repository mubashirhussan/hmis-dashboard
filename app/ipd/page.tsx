import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { IpdDashboard } from "@/features/ipd/ipd-dashboard";

export default function IpdPage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <IpdDashboard />
    </Suspense>
  );
}
