// import ClipboardRemoveOutlineIcon from "@iconify-react/mdi/clipboard-remove-outline";
import ProgressIcon from '@iconify-react/hugeicons/progress';
import CompletedSolidIcon from '@iconify-react/fluent-mdl2/completed-solid';
import ProcessingIcon from '@iconify-react/fluent-mdl2/processing';
import TestTubeIcon from '@iconify-react/mingcute/test-tube-line';
import ReceiptUndeliveredIcon from '@iconify-react/fluent-mdl2/receipt-undelivered';
import DeliveredProcedureOutlinedIcon from '@iconify-react/ant-design/delivered-procedure-outlined';
import type { ComponentType } from "react";
import type { PipelineStageIcon } from "@/features/laboratory/config/laboratory-insights-data";

type IconifyComponent = ComponentType<Record<string, unknown>>;

export const pipelineStageIconRegistry: Record<PipelineStageIcon, IconifyComponent> =
  {
    collection: TestTubeIcon,
    received: ProgressIcon,
    "result-entry": ProcessingIcon,
    approval: CompletedSolidIcon,
    undelivered: ReceiptUndeliveredIcon,
    delivered: DeliveredProcedureOutlinedIcon,
  };

type PipelineStageIconViewProps = {
  icon: PipelineStageIcon;
};

export function PipelineStageIconView({ icon }: PipelineStageIconViewProps) {
  const IconComponent = pipelineStageIconRegistry[icon];

  return (
    <IconComponent
      className="sample-pipeline__stage-icon"
      width="100%"
      height="100%"
      style={{ color: "currentColor" }}
      aria-hidden
    />
  );
}
