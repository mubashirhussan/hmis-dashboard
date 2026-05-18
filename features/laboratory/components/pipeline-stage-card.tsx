"use client";

import type { CSSProperties } from "react";
import svgPaths from "@/features/laboratory/components/svg-373ai95o5e";
import { PipelineStageIconView } from "@/features/laboratory/components/pipeline-stage-icons";
import type { PipelineStage } from "@/features/laboratory/config/laboratory-insights-data";

const STAGE_COLORS: Record<
  PipelineStage["tone"],
  { color: string; bg: string }
> = {
  blue: { color: "#026bb1", bg: "#f4f8fe" },
  purple: { color: "#7b61ff", bg: "#f3f0ff" },
  orange: { color: "#f9b115", bg: "#fff8e8" },
  green: { color: "#26c281", bg: "#e8f9f0" },
  rose: { color: "#f3435f", bg: "#fef0f2" },
  slate: { color: "#94a3b8", bg: "#f4f6f8" },
};

function CollectionIconGroup() {
  return (
    <div className="sample-pipeline__stage-icon-group" data-name="Group">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17.0833 37.2656"
        aria-hidden
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p312ed380}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function CollectionStageIcon() {
  return (
    <div
      className="sample-pipeline__stage-icon-slot"
      data-name="mingcute:test-tube-line"
    >
      <CollectionIconGroup />
    </div>
  );
}

function StageIcon({ icon }: { icon: PipelineStage["icon"] }) {
  if (icon === "collection") {
    return <CollectionStageIcon />;
  }

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
