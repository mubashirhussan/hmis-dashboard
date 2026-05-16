/**
 * Instant fallback while a dashboard route segment renders (Next.js `loading.tsx`).
 * Matches approximate layout of DashboardShell content area + metric placeholders.
 */
import { DashboardCardsSkeleton } from "@/features/shared/components/dashboard-cards-skeleton";

export default function DashboardRouteLoading() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl space-y-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-9 w-64 max-w-full animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-[min(100%,28rem)] animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex gap-2 overflow-hidden pb-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-9 w-[5.25rem] shrink-0 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800"
              />
            ))}
          </div>
        </div>
      </header>
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <DashboardCardsSkeleton />
      </div>
    </div>
  );
}
