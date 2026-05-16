import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { PharmacyDashboard } from "@/features/pharmacy/pharmacy-dashboard";

export default function PharmacyPage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <PharmacyDashboard />
    </Suspense>
  );
}
