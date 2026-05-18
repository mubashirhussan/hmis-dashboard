import { Suspense } from "react";
import DashboardRouteLoading from "@/features/shared/components/dashboard-route-loading";
import { ImagingDashboard } from "@/features/imaging/imaging-dashboard";

export default function ImagingPage() {
  return (
    <Suspense fallback={<DashboardRouteLoading />}>
      <ImagingDashboard />
    </Suspense>
  );
}
