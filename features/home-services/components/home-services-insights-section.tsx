import { StatusSection } from "@/features/home-services/components/status-section";
import { UpcomingVisitsSection } from "@/features/home-services/components/upcoming-visits-section";

export function HomeServicesInsightsSection() {
  return (
    <div className="home-services-sections">
      <StatusSection />
      <UpcomingVisitsSection />
    </div>
  );
}
