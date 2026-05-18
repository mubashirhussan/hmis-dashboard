import { MetricCard } from "@/features/shared/components/metric-card";
import type { MetricCardData } from "@/features/shared/types/metric-card";

type MetricCardsRowProps = {
  metrics: MetricCardData[];
};

export function MetricCardsRow({ metrics }: MetricCardsRowProps) {
  return (
    <div className="metric-cards-row">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
}
