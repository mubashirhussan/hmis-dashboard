export function MetricCardsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="metric-cards-row">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="metric-card animate-pulse bg-white/90" />
      ))}
    </div>
  );
}
