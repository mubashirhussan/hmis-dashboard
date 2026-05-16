import { DashboardShell } from "@/features/shared/components/dashboard-shell";

type FeaturePlaceholderProps = {
  title: string;
  description: string;
};

export function FeaturePlaceholder({
  title,
  description,
}: FeaturePlaceholderProps) {
  return (
    <DashboardShell title={title} description={description}>
      <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center">
        <p className="text-sm text-[#757575]">
          Dashboard content for {title} will be added here.
        </p>
      </div>
    </DashboardShell>
  );
}
