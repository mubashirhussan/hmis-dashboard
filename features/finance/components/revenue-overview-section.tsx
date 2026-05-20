"use client";

import { useMemo, useState } from "react";
import FinanceModeRoundedIcon from "@iconify-react/material-symbols/finance-mode-rounded";
import {
  revenueOverviewDays,
  revenueOverviewSummary,
  revenueOverviewYLabels,
  revenueOverviewYLogPositions,
} from "@/features/finance/config/finance-insights-data";
import CashIcon from '@iconify-react/game-icons/cash';
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";

const CHART_WIDTH = 580;
const CHART_HEIGHT = 210;
const PAD_LEFT = 54;
const PAD_RIGHT = 12;
const PAD_TOP = 8;
const PAD_BOTTOM = 32;
const PLOT_W = CHART_WIDTH - PAD_LEFT - PAD_RIGHT;
const PLOT_H = CHART_HEIGHT - PAD_TOP - PAD_BOTTOM;

const LOG_MIN = 10_000;
const LOG_MAX = 500_000_000;

function valueToLogY(value: number) {
  const clamped = Math.max(LOG_MIN, Math.min(LOG_MAX, value));
  const log = Math.log10(clamped);
  const minLog = Math.log10(LOG_MIN);
  const maxLog = Math.log10(LOG_MAX);
  const t = (log - minLog) / (maxLog - minLog);
  return PAD_TOP + PLOT_H - t * PLOT_H;
}

function toX(index: number, count: number) {
  return PAD_LEFT + (index / (count - 1)) * PLOT_W;
}

export function RevenueOverviewSection() {
  const [activeId, setActiveId] = useState("fri");
  const activeDay =
    revenueOverviewDays.find((day) => day.id === activeId) ??
    revenueOverviewDays[4];

  const { incomePath, expensePath, areaPath } = useMemo(() => {
    const incomePoints = revenueOverviewDays.map((day, index) =>
      `${index === 0 ? "M" : "L"} ${toX(index, revenueOverviewDays.length)} ${valueToLogY(day.income)}`,
    );
    const expensePoints = revenueOverviewDays.map((day, index) =>
      `${index === 0 ? "M" : "L"} ${toX(index, revenueOverviewDays.length)} ${valueToLogY(day.expenses)}`,
    );
    const lastX = toX(revenueOverviewDays.length - 1, revenueOverviewDays.length);
    const firstX = toX(0, revenueOverviewDays.length);
    const baseY = valueToLogY(LOG_MIN);

    return {
      incomePath: incomePoints.join(" "),
      expensePath: expensePoints.join(" "),
      areaPath: `${incomePoints.join(" ")} L ${lastX} ${baseY} L ${firstX} ${baseY} Z`,
    };
  }, []);

  const activeIndex = revenueOverviewDays.findIndex((day) => day.id === activeId);
  const tooltipX = toX(activeIndex, revenueOverviewDays.length);
  const tooltipY = valueToLogY(activeDay.income);

  return (
    <DashboardPanel
      className="finance-panel finance-panel--overview"
      title="Revenue Overview"
      icon={
        <CashIcon
          color="white" height="39"
        />
      }
    >
      <div className="finance-revenue-overview">
        <div className="finance-revenue-overview__chart-wrap">
          <svg
            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
            className="finance-revenue-overview__chart"
            role="img"
            aria-label="Weekly revenue overview line chart"
          >
            <defs>
              <linearGradient
                id="finance-income-gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#026bb1" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#026bb1" stopOpacity="0" />
              </linearGradient>
            </defs>

            {revenueOverviewYLabels.map((label, index) => {
              const y =
                PAD_TOP + revenueOverviewYLogPositions[index] * PLOT_H;

              return (
                <g key={label}>
                  <line
                    x1={PAD_LEFT}
                    y1={y}
                    x2={CHART_WIDTH - PAD_RIGHT}
                    y2={y}
                    className="finance-revenue-overview__grid-line"
                  />
                  <text
                    x={PAD_LEFT - 6}
                    y={y + 4}
                    className="finance-revenue-overview__axis-label"
                    textAnchor="end"
                  >
                    {label}
                  </text>
                </g>
              );
            })}

            <path d={areaPath} fill="url(#finance-income-gradient)" />
            <path
              d={expensePath}
              className="finance-revenue-overview__line finance-revenue-overview__line--expense"
            />
            <path
              d={incomePath}
              className="finance-revenue-overview__line finance-revenue-overview__line--income"
            />

            {revenueOverviewDays.map((day, index) => {
              const x = toX(index, revenueOverviewDays.length);
              const isActive = day.id === activeId;

              return (
                <g key={day.id}>
                  {isActive ? (
                    <line
                      x1={x}
                      y1={PAD_TOP}
                      x2={x}
                      y2={PAD_TOP + PLOT_H}
                      className="finance-revenue-overview__cursor-line"
                    />
                  ) : null}
                  <circle
                    cx={x}
                    cy={valueToLogY(day.income)}
                    r={isActive ? 5 : 0}
                    className="finance-revenue-overview__dot finance-revenue-overview__dot--income"
                  />
                  <circle
                    cx={x}
                    cy={valueToLogY(day.expenses)}
                    r={isActive ? 4 : 0}
                    className="finance-revenue-overview__dot finance-revenue-overview__dot--expense"
                  />
                  <rect
                    x={x - 36}
                    y={CHART_HEIGHT - 26}
                    width={72}
                    height={20}
                    rx={4}
                    className={
                      isActive
                        ? "finance-revenue-overview__day-hit finance-revenue-overview__day-hit--active"
                        : "finance-revenue-overview__day-hit"
                    }
                    onMouseEnter={() => setActiveId(day.id)}
                    onFocus={() => setActiveId(day.id)}
                  />
                  <text
                    x={x}
                    y={CHART_HEIGHT - 12}
                    className={
                      isActive
                        ? "finance-revenue-overview__day-label finance-revenue-overview__day-label--active"
                        : "finance-revenue-overview__day-label"
                    }
                    textAnchor="middle"
                  >
                    {day.id === "fri" ? day.label : day.label.slice(0, 3)}
                  </text>
                </g>
              );
            })}
          </svg>

          <div
            className="finance-revenue-overview__tooltip"
            style={{
              left: `${(tooltipX / CHART_WIDTH) * 100}%`,
              top: `${((tooltipY - 8) / CHART_HEIGHT) * 100}%`,
            }}
          >
            <p className="finance-revenue-overview__tooltip-title">
              {activeDay.label}
            </p>
            <p className="finance-revenue-overview__tooltip-row">
              <span
                className="finance-revenue-overview__tooltip-dot finance-revenue-overview__tooltip-dot--income"
                aria-hidden
              />
              Income : {activeDay.incomeTooltip}
            </p>
            <p className="finance-revenue-overview__tooltip-row">
              <span
                className="finance-revenue-overview__tooltip-dot finance-revenue-overview__tooltip-dot--expense"
                aria-hidden
              />
              Expenses : {activeDay.expensesTooltip}
            </p>
          </div>
        </div>

        <div className="finance-revenue-overview__summary">
          <div className="finance-revenue-overview__stat">
            <span className="finance-revenue-overview__stat-value">
              {revenueOverviewSummary.weeklyTotal}
            </span>
            <span className="finance-revenue-overview__stat-label">
              Weekly total
            </span>
          </div>
          <div className="finance-revenue-overview__stat">
            <span className="finance-revenue-overview__stat-value">
              {revenueOverviewSummary.dailyAvg}
            </span>
            <span className="finance-revenue-overview__stat-label">Daily Avg</span>
          </div>
          <div className="finance-revenue-overview__stat">
            <span className="finance-revenue-overview__stat-value finance-revenue-overview__stat-value--up">
              {revenueOverviewSummary.vsTarget}
            </span>
            <span className="finance-revenue-overview__stat-label">Vs Target</span>
          </div>
        </div>
      </div>
    </DashboardPanel>
  );
}
