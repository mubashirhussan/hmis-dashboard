import type { ComponentType, SVGProps } from "react";
import type { MetricCardIcon } from "@/features/shared/types/metric-card";

type IconProps = SVGProps<SVGSVGElement>;

function PatientsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M4 20c0-3 3-5 5-5s5 2 5 5M14 20c0-2.5 2-4 4.5-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TestsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M9 4v5l-3 8a2 2 0 0 0 1.9 2.7h8.2a2 2 0 0 0 1.9-2.7l-3-8V4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M8 9h8" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function ComplianceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M8 4h8l2 3v13H6V7l2-3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function PendingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M8 4h8l2 3v13H6V7l2-3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 12v2l1 1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 11 12 5l8 6 8-6v9a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-9Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RevenueIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 18V9l4-2 4 2v9M12 7l4-2 4 2v11"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImagingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function BloodIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 21s-6-4.5-6-9.5a4 4 0 0 1 7.5-2 4 4 0 0 1 7.5 2C21 16.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconMap: Record<
  MetricCardIcon,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  patients: PatientsIcon,
  tests: TestsIcon,
  compliance: ComplianceIcon,
  pending: PendingIcon,
  home: HomeIcon,
  revenue: RevenueIcon,
  imaging: ImagingIcon,
  blood: BloodIcon,
  finance: RevenueIcon,
  services: HomeIcon,
};

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
