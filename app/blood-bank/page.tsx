import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { BloodBankDashboard } from "@/features/blood-bank/blood-bank-dashboard";

export default function BloodBankPage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <BloodBankDashboard />
    </Suspense>
  );
}
