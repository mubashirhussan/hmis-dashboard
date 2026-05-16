import Link from "next/link";
import { dashboardFeatures } from "@/features/data";

export default function Home() {
  return (
    <div className="min-h-[calc(100dvh-var(--navbar-height))] bg-background">
      <div className=" px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <header className="max-w-2xl">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Overview
          </h1>
          <p className="mt-2 text-sm text-[#757575] sm:text-base">
            Hospital dashboards and operational modules. Select a module below or
            use the navigation bar.
          </p>
        </header>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardFeatures.map((feature) => (
            <li key={feature.id}>
              <Link
                href={feature.href}
                className="group block h-full rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-[#005696]/30 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-[#005696]">
                  {feature.label}
                </h2>
                <p className="mt-2 text-sm text-[#757575]">
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
