"use client";

import type { CSSProperties } from "react";
import svgPaths from "@/features/laboratory/components/svg-373ai95o5e";
import { PipelineStageIconView } from "@/features/laboratory/components/pipeline-stage-icons";
import type { PipelineStage } from "@/features/laboratory/config/laboratory-insights-data";

const STAGE_COLORS: Record<
  PipelineStage["tone"],
  { color: string; bg: string }
> = {
  blue: { color: "#026BB1", bg: "#F4F8FE" },
  purple: { color: "#6D4FEC", bg: "#F8F6FD" },
  orange: { color: "#FAA202", bg: "#FEFBF7" },
  green: { color: "#019965", bg: "#F5FAF8" },
  rose: { color: "#FF2F61", bg: "#FEF2F3" },
  slate: { color: "#919191", bg: "#FCFCFC" },
};




function StageIcon({ icon }: { icon: PipelineStage["icon"] }) {
 

  return (
    <div className="sample-pipeline__stage-icon-slot">
      <PipelineStageIconView icon={icon} />
    </div>
  );
}

function StageRing({ color }: { color: string }) {
  return (
    <div className="sample-pipeline__stage-ring" aria-hidden>
      <div className="sample-pipeline__stage-ring-scale">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 237 237"
        >
          <circle
            cx="118.5"
            cy="118.5"
            r="95"
            stroke={color}
            strokeWidth="47"
          />
        </svg>
      </div>
    </div>
  );
}

type PipelineStageCardProps = {
  stage: PipelineStage;
};

export function PipelineStageCard({ stage }: PipelineStageCardProps) {
  const { color, bg } = STAGE_COLORS[stage.tone];

  return (
    <article
      className={`sample-pipeline__stage sample-pipeline__stage--${stage.tone}`}
      style={
        {
          "--stage-color": color,
          "--stage-bg": bg,
        } as CSSProperties
      }
    >
      <p className="sample-pipeline__stage-label">{stage.label}</p>
      <StageRing color={color} />
      <StageIcon icon={stage.icon} />
      <p className="sample-pipeline__stage-value">{stage.value}</p>
    </article>
  );
}
