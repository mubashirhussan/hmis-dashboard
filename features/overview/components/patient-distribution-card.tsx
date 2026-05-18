"use client";

import { useMemo, useState } from "react";
import AccountGroupOutlineIcon from "@iconify-react/mdi/account-group-outline";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import {
  patientDistributionSegments,
  patientDistributionTotal,
  type PatientDistributionSegment,
} from "@/features/overview/config/overview-insights-data";

const DONUT_SIZE = 200;
const STROKE = 28;
const RADIUS = (DONUT_SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function buildArcs(segments: PatientDistributionSegment[]) {
  let offset = 0;

  return segments.map((segment) => {
    const fraction = segment.value / patientDistributionTotal;
    const length = fraction * CIRCUMFERENCE;
    const arc = {
      ...segment,
      dashArray: `${length} ${CIRCUMFERENCE - length}`,
      dashOffset: -offset,
    };
    offset += length;
    return arc;
  });
}

export function PatientDistributionCard() {
  const [activeId, setActiveId] = useState(patientDistributionSegments[0].id);
  const arcs = useMemo(() => buildArcs(patientDistributionSegments), []);
  const activeSegment =
    patientDistributionSegments.find((segment) => segment.id === activeId) ??
    patientDistributionSegments[0];

  return (
    <DashboardPanel
      title="Patient Distribution"
      icon={
        <AccountGroupOutlineIcon
          height="24"
          style={{ color: "#026bb1" }}
        />
      }
    >
      <div className="patient-distribution">
        <div className="patient-distribution__chart-wrap">
          <svg
            viewBox={`0 0 ${DONUT_SIZE} ${DONUT_SIZE}`}
            className="patient-distribution__chart"
            role="img"
            aria-label={`Patient distribution chart, ${patientDistributionTotal} total patients`}
          >
            <g transform={`rotate(-90 ${DONUT_SIZE / 2} ${DONUT_SIZE / 2})`}>
              <circle
                cx={DONUT_SIZE / 2}
                cy={DONUT_SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke="#eef2f7"
                strokeWidth={STROKE}
              />
              {arcs.map((arc) => (
                <circle
                  key={arc.id}
                  cx={DONUT_SIZE / 2}
                  cy={DONUT_SIZE / 2}
                  r={RADIUS}
                  fill="none"
                  stroke={arc.color}
                  strokeWidth={STROKE}
                  strokeDasharray={arc.dashArray}
                  strokeDashoffset={arc.dashOffset}
                  strokeLinecap="butt"
                  className="patient-distribution__segment"
                  opacity={activeId === arc.id ? 1 : 0.88}
                  onMouseEnter={() => setActiveId(arc.id)}
                  onFocus={() => setActiveId(arc.id)}
                />
              ))}
            </g>
          </svg>

          <div className="patient-distribution__center">
            <p className="patient-distribution__center-label">Total No of Patients :</p>
            <p className="patient-distribution__center-value">
              {patientDistributionTotal}
            </p>
          </div>

          <div
            className="patient-distribution__tooltip"
            style={{ borderColor: activeSegment.color }}
          >
            <p className="patient-distribution__tooltip-label">
              {activeSegment.label}
            </p>
            <p className="patient-distribution__tooltip-value">
              Patients : {activeSegment.value}
            </p>
          </div>
        </div>

        <ul className="patient-distribution__legend">
          {patientDistributionSegments.map((segment) => (
            <li key={segment.id}>
              <button
                type="button"
                className={[
                  "patient-distribution__legend-item",
                  activeId === segment.id
                    ? "patient-distribution__legend-item--active"
                    : "",
                ].join(" ")}
                onMouseEnter={() => setActiveId(segment.id)}
                onFocus={() => setActiveId(segment.id)}
              >
                <span
                  className="patient-distribution__legend-dot"
                  style={{ backgroundColor: segment.color }}
                  aria-hidden
                />
                <span className="patient-distribution__legend-label">
                  {segment.label}
                </span>
                <span className="patient-distribution__legend-value">
                  {segment.value}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </DashboardPanel>
  );
}
