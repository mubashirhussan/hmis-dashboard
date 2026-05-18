import LabIcon from "@iconify-react/icomoon-free/lab";
import BloodBankIcon from "@iconify-react/maki/blood-bank";
import BacteriaOutlineIcon from "@iconify-react/mdi/bacteria-outline";
import BloodBagIcon from "@iconify-react/mdi/blood-bag";
import MagnetOnIcon from "@iconify-react/mdi/magnet-on";
import RadiationIcon from "@iconify-react/mdi/radiation";
import TestTubeIcon from "@iconify-react/mdi/test-tube";
import WavesIcon from "@iconify-react/mdi/waves";
import type { ComponentType } from "react";
import type { WorkloadDepartmentIcon } from "@/features/overview/config/overview-workload-data";

type IconifyComponent = ComponentType<Record<string, unknown>>;

export const workloadDepartmentIconRegistry: Record<
  WorkloadDepartmentIcon,
  IconifyComponent
> = {
  chemistry: LabIcon,
  hematology: BloodBagIcon,
  microbiology: BacteriaOutlineIcon,
  serology: TestTubeIcon,
  "blood-bank": BloodBankIcon,
  xray: RadiationIcon,
  "ct-mri": MagnetOnIcon,
  ultrasound: WavesIcon,
};

type WorkloadDepartmentIconViewProps = {
  icon: WorkloadDepartmentIcon;
  className?: string;
};

export function WorkloadDepartmentIconView({
  icon,
  className,
}: WorkloadDepartmentIconViewProps) {
  const IconComponent = workloadDepartmentIconRegistry[icon];

  return <IconComponent className={className} aria-hidden />;
}
