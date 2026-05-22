"use client";

import { useRef, useState } from "react";

import CalendarOutlineIcon from '@iconify-react/ion/calendar-outline';

function getTodayIso() {
  return new Date().toISOString().slice(0, 10);
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
        <CalendarOutlineIcon className="text-[#026BB1] size-5.75" />
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
