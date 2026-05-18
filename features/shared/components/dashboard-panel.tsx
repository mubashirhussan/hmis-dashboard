import type { ReactNode } from "react";

type DashboardPanelProps = {
  title: string;
  icon: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function DashboardPanel({
  title,
  icon,
  action,
  children,
  className,
}: DashboardPanelProps) {
  return (
    <article className={joinClasses("dashboard-panel", className)}>
      <header className="dashboard-panel__header">
        <div className="dashboard-panel__header-main">
          <div className="dashboard-panel__icon" aria-hidden>
            {icon}
          </div>
          <h2 className="dashboard-panel__title">{title}</h2>
        </div>
        {action}
      </header>
      <div className="dashboard-panel__divider" aria-hidden />
      {children}
    </article>
  );
}
