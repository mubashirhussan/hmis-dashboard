import type { ComponentType, SVGProps } from "react";
import {
  METRIC_ICON_COLOR,
  metricIconifyRegistry,
} from "@/features/shared/components/metric-icon-registry";
import type { MetricCardIcon } from "@/features/shared/types/metric-card";

type IconProps = SVGProps<SVGSVGElement>;

function createMetricIcon(iconKey: MetricCardIcon) {
  const IconifyIcon = metricIconifyRegistry[iconKey];

  function MetricIcon({ className }: IconProps) {
    return (
      <IconifyIcon
        height="24"
        className={className}
        style={{ color: METRIC_ICON_COLOR }}
      />
    );
  }

  return MetricIcon;
}

const iconMap = Object.fromEntries(
  (Object.keys(metricIconifyRegistry) as MetricCardIcon[]).map((key) => [
    key,
    createMetricIcon(key),
  ]),
) as Record<MetricCardIcon, ComponentType<SVGProps<SVGSVGElement>>>;

export function MetricCardIconView({
  icon,
  className,
}: {
  icon: MetricCardIcon;
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
