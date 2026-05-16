"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardFeatures } from "@/features/data";

type DashboardShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function DashboardShell({
  title,
  description,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              HMIS Dashboard
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>
          <nav
            aria-label="Feature navigation"
            className="flex gap-2 overflow-x-auto pb-1"
          >
            {dashboardFeatures.map((feature) => {
              const isActive = pathname === feature.href;

              return (
                <Link
                  key={feature.id}
                  href={feature.href}
                  className={[
                    "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
                  ].join(" ")}
                >
                  {feature.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
