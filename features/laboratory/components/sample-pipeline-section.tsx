"use client";

import { Fragment } from "react";
import ViewGridOutlineIcon from "@iconify-react/mdi/view-grid-outline";
import { PipelineStageCard } from "@/features/laboratory/components/pipeline-stage-card";
import {
  samplePipelineStages,
  samplePipelineTotal,
} from "@/features/laboratory/config/laboratory-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import { PipelineConnector } from "@/features/laboratory/components/pipeline-connector";
import { PanelViewAllButton } from "@/features/shared/components/panel-view-all-button";

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
            <Fragment key={stage.id}>
              <div className="sample-pipeline__stage-wrap" role="listitem">
                <PipelineStageCard stage={stage} />
              </div>
              {index < samplePipelineStages.length - 1 ? (
                <PipelineConnector />
              ) : null}
            </Fragment>
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
