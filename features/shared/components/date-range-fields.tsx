"use client";

import { useRef, useState } from "react";

function getTodayIso() {
  return new Date().toISOString().slice(0, 10);
}

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

function openDatePicker(input: HTMLInputElement | null) {
  if (!input) return;

  try {
    if (typeof input.showPicker === "function") {
      void input.showPicker();
      return;
    }
  } catch {
    // showPicker may throw in unsupported contexts
  }

  input.focus();
  input.click();
}

function DateField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="date-field">
      <label htmlFor={id} className="date-field-label">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={id}
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="date-field-input"
      />
      <button
        type="button"
        className="date-field-calendar-btn"
        onClick={() => openDatePicker(inputRef.current)}
        aria-label={`Open calendar for ${label}`}
      >
        <CalendarIcon />
      </button>
    </div>
  );
}

export function DateRangeFields() {
  const [fromDate, setFromDate] = useState(getTodayIso);
  const [toDate, setToDate] = useState(getTodayIso);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <DateField
        id="dashboard-date-from"
        label="From"
        value={fromDate}
        onChange={setFromDate}
      />
      <DateField
        id="dashboard-date-to"
        label="To"
        value={toDate}
        onChange={setToDate}
      />
    </div>
  );
}
