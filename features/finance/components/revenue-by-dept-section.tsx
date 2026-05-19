"use client";

import { useMemo, useState } from "react";
import HexagonOutlineIcon from "@iconify-react/mdi/hexagon-outline";
import {
  revenueDeptSegments,
  type RevenueDeptSegment,
} from "@/features/finance/config/finance-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

const CHART_W = 300;
const CHART_H = 155;
const CX = CHART_W / 2;
const CY = CHART_H - 4;
const STROKE = 32;
const RADIUS = 96;
const HALF_CIRCUMFERENCE = Math.PI * RADIUS;

function buildSemiArcs(segments: RevenueDeptSegment[]) {
  let offset = 0;

  return segments.map((segment) => {
    const length = (segment.percent / 100) * HALF_CIRCUMFERENCE;
    const arc = {
      ...segment,
      dashArray: `${length} ${HALF_CIRCUMFERENCE * 2}`,
      dashOffset: -offset,
    };
    offset += length;
    return arc;
  });
}

export function RevenueByDeptSection() {
  const [activeId, setActiveId] = useState("home-services");
  const arcs = useMemo(() => buildSemiArcs(revenueDeptSegments), []);
  const activeSegment =
    revenueDeptSegments.find((segment) => segment.id === activeId) ??
    revenueDeptSegments[2];

  return (
    <DashboardPanel
      className="finance-panel finance-panel--dept"
      title="Revenue by Dept"
      icon={
        <HexagonOutlineIcon
          height="24"
          width="24"
          style={{ color: "#ffffff" }}
          aria-hidden
        />
      }
    >
      <div className="finance-revenue-dept">
        <div className="finance-revenue-dept__chart-wrap">
          <svg
            viewBox={`0 0 ${CHART_W} ${CHART_H}`}
            className="finance-revenue-dept__chart"
            role="img"
            aria-label="Revenue by department semi-circle chart"
          >
            <defs>
              <pattern
                id="finance-dept-stripe"
                width="6"
                height="6"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect width="6" height="6" fill="#22c55e" />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="6"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              </pattern>
            </defs>

            <g transform={`rotate(180 ${CX} ${CY})`}>
              <circle
                cx={CX}
                cy={CY}
                r={RADIUS}
                fill="none"
                stroke="#eef2f7"
                strokeWidth={STROKE}
                strokeDasharray={`${HALF_CIRCUMFERENCE} ${HALF_CIRCUMFERENCE}`}
                strokeLinecap="butt"
              />
              {arcs.map((arc) => (
                <circle
                  key={arc.id}
                  cx={CX}
                  cy={CY}
                  r={RADIUS}
                  fill="none"
                  stroke={arc.pattern ? "url(#finance-dept-stripe)" : arc.color}
                  strokeWidth={STROKE}
                  strokeDasharray={arc.dashArray}
                  strokeDashoffset={arc.dashOffset}
                  strokeLinecap="butt"
                  className="finance-revenue-dept__segment"
                  opacity={activeId === arc.id ? 1 : 0.9}
                  onMouseEnter={() => setActiveId(arc.id)}
                  onFocus={() => setActiveId(arc.id)}
                />
              ))}
            </g>
          </svg>

          <div
            className="finance-revenue-dept__tooltip"
            style={{ borderColor: activeSegment.color }}
          >
            <p className="finance-revenue-dept__tooltip-label">
              {activeSegment.label.toUpperCase()}
            </p>
            <p className="finance-revenue-dept__tooltip-value">
              REVENUE : {activeSegment.revenue}
            </p>
          </div>
        </div>

        <ul className="finance-revenue-dept__legend">
          {revenueDeptSegments.map((segment) => (
            <li key={segment.id}>
              <button
                type="button"
                className={[
                  "finance-revenue-dept__legend-item",
                  activeId === segment.id
                    ? "finance-revenue-dept__legend-item--active"
                    : "",
                ].join(" ")}
                onMouseEnter={() => setActiveId(segment.id)}
                onFocus={() => setActiveId(segment.id)}
              >
                <span
                  className={[
                    "finance-revenue-dept__legend-dot",
                    segment.pattern && "finance-revenue-dept__legend-dot--pattern",
                  ].join(" ")}
                  style={
                    segment.pattern
                      ? undefined
                      : { backgroundColor: segment.color }
                  }
                  aria-hidden
                />
                <span className="finance-revenue-dept__legend-text">
                  {segment.label.toUpperCase()} {segment.percent}%
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </DashboardPanel>
  );
}
