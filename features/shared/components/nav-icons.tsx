import { ChartNoAxesCombined, CircleCheck, Disc, FlaskConical, House, MapPinPlusInside } from "lucide-react";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function NavOverviewIcon(props: IconProps) {
  return (
    <CircleCheck size={20} />
  );
}

export function NavLaboratoryIcon(props: IconProps) {
  return (
    <FlaskConical size={20} />
  );
}

export function NavImagingIcon(props: IconProps) {
  return (
    <Disc size={20} />
  );
}

export function NavBloodBankIcon(props: IconProps) {
  return (
     <MapPinPlusInside size={20} />
  );
}

export function NavFinanceIcon(props: IconProps) {
  return (
    <ChartNoAxesCombined size={20} />
  );
}

export function NavHomeServicesIcon(props: IconProps) {
  return (
     <House size={20} />
  );
}

export function NavBellIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M15 17H9l-1-2h8l-1 2ZM9.5 7.5a2.5 2.5 0 0 1 5 0V11l1.5 3h-8l1.5-3V7.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NavChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NavMenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NavCloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
