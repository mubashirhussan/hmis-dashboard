import { MetricCardIconView } from "@/features/shared/components/metric-card-icons";
import type { MetricCardData } from "@/features/shared/types/metric-card";

type MetricCardProps = {
  metric: MetricCardData;
};

function TrendChartIcon({ positive }: { positive: boolean }) {
  const color = positive ? "#22c55e" : "#ef4444";

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M4 16l5-5 4 4 7-9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6h6v6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeArrowIcon({ positive }: { positive: boolean }) {
  return (
    <svg
      viewBox="0 0 8 8"
      className="metric-card__badge-icon"
      fill="none"
      aria-hidden
    >
      <path
        d={positive ? "m2 5 2-2 2 2" : "m2 3 2 2 2-2"}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MetricCard({ metric }: MetricCardProps) {
  const positive = metric.changePercent >= 0;
  const badgeText = `${Math.abs(metric.changePercent)}%`;

  return (
    <article className="metric-card">
      <div className="metric-card__icon">
        <MetricCardIconView icon={metric.icon} className="metric-card__icon-svg" />
      </div>

      <p className="metric-card__label">{metric.label}</p>
      <p className="metric-card__value">{metric.value}</p>

      <span
        className={[
          "metric-card__badge",
          !positive ? "metric-card__badge--negative" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <BadgeArrowIcon positive={positive} />
        {badgeText}
      </span>

      <div className="metric-card__decoration" aria-hidden />
      <div className="metric-card__trend" aria-hidden>
        <TrendChartIcon positive={positive} />
      </div>
    </article>
  );
}
