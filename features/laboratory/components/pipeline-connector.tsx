/** Pipeline gap arrow — inline SVG (si:arrow-right-line path) for reliable 24×16 sizing */
export function PipelineConnector() {
  return (
    <div className="sample-pipeline__connector" aria-hidden>
      <svg
        className="sample-pipeline__connector-icon"
        width="24"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M14 16l4-4-4-4M18 12H6"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
