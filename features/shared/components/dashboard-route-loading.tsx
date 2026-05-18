import { MetricCardsSkeleton } from "@/features/shared/components/metric-cards-skeleton";

export default function DashboardRouteLoading() {
  return (
    <div className="min-h-[calc(100dvh-var(--navbar-height))] bg-background">
      <div className="mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="space-y-2">
            <div className="h-8 w-48 animate-pulse rounded-lg bg-white/80" />
            <div className="h-4 w-72 max-w-full animate-pulse rounded bg-white/60" />
          </div>
          <div className="flex gap-3">
            <div className="h-11 w-[170px] animate-pulse rounded-lg bg-white/80" />
            <div className="h-11 w-[170px] animate-pulse rounded-lg bg-white/80" />
          </div>
        </div>
        <MetricCardsSkeleton />
      </div>
    </div>
  );
}
