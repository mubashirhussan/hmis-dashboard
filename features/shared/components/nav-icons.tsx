import { ChartNoAxesCombined, CircleCheck, Disc, FlaskConical, House, MapPinPlusInside } from "lucide-react";
import CheckCircleOutlineRoundedIcon from '@iconify-react/material-symbols-light/check-circle-outline-rounded';
import type { SVGProps } from "react";
import LabIcon from '@iconify-react/icomoon-free/lab';
import CircleDoubleIcon from '@iconify-react/mdi/circle-double';
import BloodBankIcon from '@iconify-react/maki/blood-bank';
import FinanceModeRoundedIcon from '@iconify-react/material-symbols/finance-mode-rounded';
import Flower3Icon from '@iconify-react/bi/flower3';

type IconProps = SVGProps<SVGSVGElement>;

export function NavOverviewIcon(props: IconProps) {
  return (
   <CheckCircleOutlineRoundedIcon height="1.25em" />
  );
}

export function NavLaboratoryIcon(props: IconProps) {
  return (
   <LabIcon height="1.25em" />
  );
}

export function NavImagingIcon(props: IconProps) {
  return (
    <CircleDoubleIcon height="1.25em" />
  );
}

export function NavBloodBankIcon(props: IconProps) {
  return (
    <BloodBankIcon height="1.25em" />
  );
}

export function NavFinanceIcon(props: IconProps) {
  return (
    <FinanceModeRoundedIcon height="1.25em" />
  );
}

export function NavHomeServicesIcon(props: IconProps) {
  return (
    <Flower3Icon height="1.25em" />
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
