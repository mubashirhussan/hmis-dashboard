export function PipelineConnector() {
  return (
    <div className="sample-pipeline__connector" aria-hidden>
      <svg
        className="sample-pipeline__connector-icon"
        viewBox="0 0 24 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M14 2L20 8L14 14M20 8H2"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}