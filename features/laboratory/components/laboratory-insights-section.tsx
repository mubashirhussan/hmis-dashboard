import { CriticalValuesSection } from "@/features/laboratory/components/critical-values-section";
import { RiderTrackingSection } from "@/features/laboratory/components/rider-tracking-section";
import { SamplePipelineSection } from "@/features/laboratory/components/sample-pipeline-section";
import { SectionWorkloadSection } from "@/features/laboratory/components/section-workload-section";

export function LaboratoryInsightsSection() {
  return (
    <div className="laboratory-sections">
      <SamplePipelineSection />
      <CriticalValuesSection />
      <section
        className="laboratory-bottom-row"
        aria-label="Rider tracking and section workload"
      >
        <RiderTrackingSection />
        <SectionWorkloadSection />
      </section>
    </div>
  );
}
