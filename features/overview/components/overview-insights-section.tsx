import { PatientDistributionCard } from "@/features/overview/components/patient-distribution-card";
import { TatComplianceCard } from "@/features/overview/components/tat-compliance-card";

export function OverviewInsightsSection() {
  return (
    <section
      className="overview-insights"
      aria-label="Overview analytics"
    >
      <PatientDistributionCard />
      <TatComplianceCard />
    </section>
  );
}
