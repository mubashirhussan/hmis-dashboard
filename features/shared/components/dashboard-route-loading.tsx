import { DashboardCardsSkeleton } from "@/features/shared/components/dashboard-cards-skeleton";

export default function DashboardRouteLoading() {
  return (
    <div className="min-h-[calc(100dvh-var(--navbar-height))] bg-background">
      <div className=" space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="space-y-2">
          <div className="h-8 w-48 animate-pulse rounded-lg bg-zinc-200" />
          <div className="h-4 w-72 max-w-full animate-pulse rounded bg-zinc-200" />
        </div>
        <DashboardCardsSkeleton />
      </div>
    </div>
  );
}
