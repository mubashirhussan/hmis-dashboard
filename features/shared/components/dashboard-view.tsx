"use client";

import type { DashboardSummary } from "@/features/shared/types/dashboard-types";

type DashboardViewProps = {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  data?: DashboardSummary;
  onRetry?: () => void;
};

export function DashboardView({
  isLoading,
  isError,
  errorMessage,
  data,
  onRetry,
}: DashboardViewProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-28 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/40">
        <p className="font-medium text-red-800 dark:text-red-200">
          Failed to load dashboard
        </p>
        <p className="mt-1 text-sm text-red-700 dark:text-red-300">
          {errorMessage ?? "Check your API connection and try again."}
        </p>
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="mt-4 rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
          >
            Retry
          </button>
        ) : null}
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Last updated: {new Date(data.updatedAt).toLocaleString()}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.metrics.map((metric) => (
          <article
            key={metric.id}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {metric.label}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">
              {metric.value}
            </p>
            {metric.changePercent !== undefined ? (
              <p
                className={[
                  "mt-2 text-sm font-medium",
                  metric.changePercent >= 0
                    ? "text-emerald-600"
                    : "text-red-600",
                ].join(" ")}
              >
                {metric.changePercent >= 0 ? "+" : ""}
                {metric.changePercent}% vs last period
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
