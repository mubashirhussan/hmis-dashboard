import type { ComponentType, SVGProps } from "react";
import {
  NavBloodBankIcon,
  NavFinanceIcon,
  NavHomeServicesIcon,
  NavImagingIcon,
  NavLaboratoryIcon,
  NavOverviewIcon,
} from "@/features/shared/components/nav-icons";

export type NavItemId =
  | "overview"
  | "laboratory"
  | "imaging"
  | "blood-bank"
  | "finance"
  | "home-services";

export type NavItem = {
  id: NavItemId;
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const navItems: readonly NavItem[] = [
  { id: "overview", label: "Overview", href: "/", icon: NavOverviewIcon },
  {
    id: "laboratory",
    label: "Laboratory",
    href: "/laboratory",
    icon: NavLaboratoryIcon,
  },
  { id: "imaging", label: "Imaging", href: "/imaging", icon: NavImagingIcon },
  {
    id: "blood-bank",
    label: "Blood Bank",
    href: "/blood-bank",
    icon: NavBloodBankIcon,
  },
  { id: "finance", label: "Finance", href: "/finance", icon: NavFinanceIcon },
  {
    id: "home-services",
    label: "Home Services",
    href: "/home-services",
    icon: NavHomeServicesIcon,
  },
] as const;

export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
