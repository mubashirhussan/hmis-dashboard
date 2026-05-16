"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Catches **render** errors for this route segment only.
 * Fetch errors from RTK Query still render inside {@link DashboardView} unless you `throw`.
 */
export default function DashboardRouteError({ error, reset }: Props) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <div className="max-w-md rounded-xl border border-red-200 bg-red-50 px-6 py-8 dark:border-red-900 dark:bg-red-950/40">
        <h2 className="text-lg font-semibold text-red-900 dark:text-red-100">
          This page crashed
        </h2>
        <p className="mt-2 text-sm text-red-800 dark:text-red-200">
          {error.message ||
            "An unexpected error occurred while rendering this dashboard."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
