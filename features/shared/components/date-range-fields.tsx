"use client";

type DateRangeFieldsProps = {
  from?: string;
  to?: string;
  onFromChange?: (value: string) => void;
  onToChange?: (value: string) => void;
};

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0 text-[#026bb1]"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 2v2M14 2v2M3 7h14M4 4h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DateField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="flex min-w-[150px] items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-3 py-2.5 sm:min-w-[170px]">
      <span className="text-sm font-medium text-[#64748b]">{label}</span>
      <input
        type="date"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-[#334155] outline-none"
        aria-label={label}
      />
      <CalendarIcon />
    </div>
  );
}

export function DateRangeFields({
  from = "",
  to = "",
  onFromChange,
  onToChange,
}: DateRangeFieldsProps) {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <DateField label="From" value={from || today} onChange={onFromChange} />
      <DateField label="To" value={to || today} onChange={onToChange} />
    </div>
  );
}
