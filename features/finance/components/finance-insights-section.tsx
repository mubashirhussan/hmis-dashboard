import { PaymentModesSection } from "@/features/finance/components/payment-modes-section";
import { RevenueByDeptSection } from "@/features/finance/components/revenue-by-dept-section";
import { RevenueOverviewSection } from "@/features/finance/components/revenue-overview-section";

export function FinanceInsightsSection() {
  return (
    <div className="finance-sections">
      <section
        className="finance-insights-grid"
        aria-label="Revenue and payment insights"
      >
        <RevenueOverviewSection />
        <RevenueByDeptSection />
        <PaymentModesSection />
      </section>
    </div>
  );
}
