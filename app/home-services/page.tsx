import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { HomeServicesDashboard } from "@/features/home-services/home-services-dashboard";

export default function HomeServicesPage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <HomeServicesDashboard />
    </Suspense>
  );
}
