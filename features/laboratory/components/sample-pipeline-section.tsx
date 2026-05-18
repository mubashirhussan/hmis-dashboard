"use client";

import ViewGridOutlineIcon from "@iconify-react/mdi/view-grid-outline";
import { PipelineStageIconView } from "@/features/laboratory/components/pipeline-stage-icons";
import {
  samplePipelineStages,
  samplePipelineTotal,
} from "@/features/laboratory/config/laboratory-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import { PanelViewAllButton } from "@/features/shared/components/panel-view-all-button";

function PipelineConnector() {
  return (
    <span className="sample-pipeline__connector" aria-hidden>
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
        <path
          d="M6 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function SamplePipelineSection() {
  const progressStages = samplePipelineStages.filter((stage) => stage.inProgress);
  const progressTotal = progressStages.reduce((sum, stage) => sum + stage.value, 0);

  return (
    <DashboardPanel
      className="lab-panel lab-pipeline-panel"
      title="Sample Pipeline"
      icon={
        <ViewGridOutlineIcon
          height="24"
          width="24"
          style={{ color: "#ffffff" }}
          aria-hidden
        />
      }
      action={<PanelViewAllButton />}
    >
      <div className="sample-pipeline">
        <div className="sample-pipeline__stages" role="list">
          {samplePipelineStages.map((stage, index) => (
            <div key={stage.id} className="sample-pipeline__stage-wrap" role="listitem">
              <article
                className={[
                  "sample-pipeline__stage",
                  `sample-pipeline__stage--${stage.tone}`,
                ].join(" ")}
              >
                <p className="sample-pipeline__stage-label">{stage.label}</p>
                <p className="sample-pipeline__stage-value">{stage.value}</p>
                <div className="sample-pipeline__stage-arch" aria-hidden>
                  <PipelineStageIconView icon={stage.icon} />
                </div>
              </article>
              {index < samplePipelineStages.length - 1 ? (
                <PipelineConnector />
              ) : null}
            </div>
          ))}
        </div>

        <div className="sample-pipeline__progress-wrap">
          <div className="sample-pipeline__progress-head">
            <span className="sample-pipeline__progress-label">
              Pipeline Progress
            </span>
            <span className="sample-pipeline__progress-total">
              {samplePipelineTotal.toLocaleString()} Total
            </span>
          </div>
          <div
            className="sample-pipeline__progress-bar"
            role="progressbar"
            aria-valuenow={progressTotal}
            aria-valuemin={0}
            aria-valuemax={progressTotal}
            aria-label="Pipeline progress"
          >
            {progressStages.map((stage) => (
              <span
                key={stage.id}
                className={`sample-pipeline__progress-segment sample-pipeline__progress-segment--${stage.tone}`}
                style={{
                  width: `${(stage.value / progressTotal) * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardPanel>
  );
}
