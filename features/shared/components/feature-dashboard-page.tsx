"use client";

import { useState } from "react";
import {
  Container,
  ContainerFluid,
} from "@/features/shared/components/container";
import { DateRangeFields } from "@/features/shared/components/date-range-fields";
import { MetricCardsRow } from "@/features/shared/components/metric-cards-row";
import { MetricCardsSkeleton } from "@/features/shared/components/metric-cards-skeleton";
import type { DashboardPageContent } from "@/features/shared/types/metric-card";

type FeatureDashboardPageProps = {
  content: DashboardPageContent;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onRetry?: () => void;
  children?: React.ReactNode;
};

export function FeatureDashboardPage({
  content,
  isLoading = false,
  isError = false,
  errorMessage,
  onRetry,
  children,
}: FeatureDashboardPageProps) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <ContainerFluid className="min-h-[calc(100dvh-var(--navbar-height))] overflow-x-clip bg-background">
      <Container className="py-6 sm:py-8">
        <header className=" flex flex-col gap-4  lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="dashboard-page-title">{content.title}</h1>
            <p className="dashboard-page-subtitle mt-1">{content.subtitle}</p>
          </div>
          <DateRangeFields
            from={fromDate}
            to={toDate}
            onFromChange={setFromDate}
            onToChange={setToDate}
          />
        </header>

        {isError ? (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="font-medium text-red-800">Failed to load dashboard</p>
            <p className="mt-1 text-sm text-red-700">
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
        ) : null}

        {isLoading ? (
          <MetricCardsSkeleton />
        ) : (
          <MetricCardsRow metrics={content.metrics} />
        )}

        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </ContainerFluid>
  );
}
