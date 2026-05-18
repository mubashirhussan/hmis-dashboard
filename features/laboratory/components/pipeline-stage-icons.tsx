import CheckCircleOutlineIcon from "@iconify-react/mdi/check-circle-outline";
import ClipboardRemoveOutlineIcon from "@iconify-react/mdi/clipboard-remove-outline";
import ClockOutlineIcon from "@iconify-react/mdi/clock-outline";
import CogSyncIcon from "@iconify-react/mdi/cog-sync";
import FileCheckOutlineIcon from "@iconify-react/mdi/file-check-outline";
import TestTubeIcon from "@iconify-react/mdi/test-tube";
import type { ComponentType } from "react";
import type { PipelineStageIcon } from "@/features/laboratory/config/laboratory-insights-data";

type IconifyComponent = ComponentType<Record<string, unknown>>;

export const pipelineStageIconRegistry: Record<PipelineStageIcon, IconifyComponent> =
  {
    collection: TestTubeIcon,
    received: ClockOutlineIcon,
    "result-entry": CogSyncIcon,
    approval: CheckCircleOutlineIcon,
    undelivered: ClipboardRemoveOutlineIcon,
    delivered: FileCheckOutlineIcon,
  };

type PipelineStageIconViewProps = {
  icon: PipelineStageIcon;
};

export function PipelineStageIconView({ icon }: PipelineStageIconViewProps) {
  const IconComponent = pipelineStageIconRegistry[icon];

  return (
    <IconComponent height="20" width="20" style={{ color: "#ffffff" }} aria-hidden />
  );
}
