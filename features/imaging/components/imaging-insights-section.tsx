import { ModalityBreakdownSection } from "@/features/imaging/components/modality-breakdown-section";
import { RadiologistProductivitySection } from "@/features/imaging/components/radiologist-productivity-section";
import { RadiologyReportingSection } from "@/features/imaging/components/radiology-reporting-section";

export function ImagingInsightsSection() {
  return (
    <div className="imaging-sections">
      <section
        className="imaging-top-row"
        aria-label="Modality breakdown and radiology reporting"
      >
        <ModalityBreakdownSection />
        <RadiologyReportingSection />
      </section>
      <RadiologistProductivitySection />
    </div>
  );
}
