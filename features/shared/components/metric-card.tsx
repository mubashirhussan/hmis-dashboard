import { MetricCardIconView } from "@/features/shared/components/metric-card-icons";
import type { MetricCardData } from "@/features/shared/types/metric-card";

type MetricCardProps = {
  metric: MetricCardData;
};

function TrendIcon({ positive }: { positive: boolean }) {
  if (positive) {
    return (
      <svg viewBox="0 0 16 16" className="h-4 w-4 text-[#22c55e]" aria-hidden>
        <path
          d="m4 11 4-4 4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-[#ef4444]" aria-hidden>
      <path
        d="m4 5 4 4 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function MetricCard({ metric }: MetricCardProps) {
  const positive = metric.changePercent >= 0;
  const badgeText = `${positive ? "+" : ""}${metric.changePercent}%`;

  return (
    <article className="metric-card">
      <div className="metric-card__decoration" aria-hidden />

      <div className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f3fc] text-[#026bb1]">
        <MetricCardIconView icon={metric.icon} className="h-6 w-6" />
      </div>

      <div className="relative z-[1] min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[11px] font-semibold tracking-wide text-[#64748b] uppercase sm:text-xs">
            {metric.label}
          </p>
          <TrendIcon positive={positive} />
        </div>
        <p className="mt-1 text-xl font-bold text-[#1e3a5f] sm:text-2xl lg:text-[28px]">
          {metric.value}
        </p>
        <span
          className={[
            "mt-1 inline-flex rounded-md px-2 py-0.5 text-xs font-semibold",
            positive
              ? "bg-[#dcfce7] text-[#16a34a]"
              : "bg-[#fee2e2] text-[#dc2626]",
          ].join(" ")}
        >
          {badgeText}
        </span>
      </div>
    </article>
  );
}
