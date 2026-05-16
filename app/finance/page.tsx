import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { FinanceDashboard } from "@/features/finance/finance-dashboard";

export default function FinancePage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <FinanceDashboard />
    </Suspense>
  );
}
