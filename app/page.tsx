import Link from "next/link";
import { dashboardFeatures } from "@/features/data";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            HMIS Dashboard
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Hospital dashboard features
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Six dashboard-focused features powered by RTK Query. Open one to load
            metrics from your API.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardFeatures.map((feature) => (
            <li key={feature.id}>
              <Link
                href={feature.href}
                className="group block h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700"
              >
                <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-50 dark:group-hover:text-emerald-400">
                  {feature.label}
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
