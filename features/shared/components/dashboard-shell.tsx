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
  return (
    <div className="min-h-[calc(100dvh-var(--navbar-height))] bg-background">
      <div className=" px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h1>
          <p className="mt-1 text-sm text-[#757575]">{description}</p>
        </header>
        {children}
      </div>
    </div>
  );
}
