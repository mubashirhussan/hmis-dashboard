import { BloodGroupInventoryCard } from "@/features/blood-bank/components/blood-group-inventory-card";
import { BloodGroupPanelIcon } from "@/features/blood-bank/components/blood-group-panel-icon";
import { BloodGroupInventorySummaryBar } from "@/features/blood-bank/components/blood-group-inventory-summary";
import {
  bloodGroupInventoryItems,
  bloodGroupInventorySummary,
} from "@/features/blood-bank/config/blood-group-inventory-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

export function BloodGroupInventorySection() {
  return (
    <section className="blood-group-inventory" aria-label="Blood group inventory">
      <DashboardPanel
        className="blood-bank-panel blood-group-inventory-panel"
        title="Blood Group Inventory"
        icon={<BloodGroupPanelIcon />}
      >
        <ul className="blood-group-inventory__grid">
          {bloodGroupInventoryItems.map((item) => (
            <li key={item.id}>
              <BloodGroupInventoryCard item={item} />
            </li>
          ))}
        </ul>

        <BloodGroupInventorySummaryBar summary={bloodGroupInventorySummary} />
      </DashboardPanel>
    </section>
  );
}
