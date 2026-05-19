import { BloodGroupInventorySection } from "@/features/blood-bank/components/blood-group-inventory-section";
import { InventoryManagementSection } from "@/features/blood-bank/components/inventory-management-section";

export function BloodBankInsightsSection() {
  return (
    <div className="blood-bank-sections">
      <InventoryManagementSection />
      <BloodGroupInventorySection />
    </div>
  );
}
