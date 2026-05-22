// import LabIcon from "@iconify-react/icomoon-free/lab";
import BloodBankIcon from "@iconify-react/maki/blood-bank";
import BacteriaOutlineIcon from "@iconify-react/mdi/bacteria-outline";
import BloodBagIcon from "@iconify-react/mdi/blood-bag";
import MagnetOnIcon from "@iconify-react/mdi/magnet-on";
import RadiationIcon from "@iconify-react/mdi/radiation";
import WavesIcon from "@iconify-react/mdi/waves";
import LabIcon from '@iconify-react/carbon/chemistry';
import type { ComponentType } from "react";
import type { WorkloadDepartmentIcon } from "@/features/overview/config/overview-workload-data";



import LaboratoryIcon from '@iconify-react/fontisto/laboratory';
import WaterDropIcon from '@iconify-react/material-symbols-light/water-drop';
import TestTubeIcon from '@iconify-react/fluent-emoji-high-contrast/test-tube';
import BloodAddIcon from '@iconify-react/lets-icons/blood-add';
import RadiationSolidIcon from '@iconify-react/iconoir/radiation-solid';
// import MagnetBoldDuotoneIcon from '@iconify-react/solar/magnet-bold-duotone';

const MicrobiologyIcon = ({ className, width, height }: any) => {
  return (
    <img
      src="microbiology.png"
      className={className}
      width={width}
      height={height}
      alt="Microbiology"
    />
  );
};
const MicroscopeIcon = ({ className, width, height }: any) => {
  return (
    <img
      src="microscope.png"
      className={className}
      width={width}
      height={height}
      alt="Microscope"
    />
  );
};
const MagnetBoldDuotoneIcon = ({ className, width, height }: any) => {
  return (
    <img
      src="magnet.png"
      className={className}
      width={width}
      height={height}
      alt="Magnet Bold Duotone"
    />
  );
};

type IconifyComponent = ComponentType<Record<string, unknown>>;

export const workloadDepartmentIconRegistry: Record<
  WorkloadDepartmentIcon,
  IconifyComponent
> = {
  chemistry: LaboratoryIcon,
  hematology: WaterDropIcon,
  microbiology: MicrobiologyIcon,
  serology: TestTubeIcon,
  "blood-bank": BloodAddIcon,
  xray: RadiationSolidIcon,
  "ct-mri": MagnetBoldDuotoneIcon,
  ultrasound: MicroscopeIcon,
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

  return (
    <IconComponent className={className} width="100%" height="100%" aria-hidden />
  );
}
