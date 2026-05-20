import CalendarEventIcon from "@iconify-react/bi/calendar-event";
import RadiationIcon from "@iconify-react/mdi/radiation";
import TimerIcon from "@iconify-react/material-symbols-light/timer";
import { upcomingVisits } from "@/features/home-services/config/home-services-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import EventsIcon from '@iconify-react/mdi/events';

export function UpcomingVisitsSection() {
  return (
    <DashboardPanel
      className="hs-panel hs-panel--visits"
      title="Upcoming Visits"
      icon={
        <EventsIcon
          height="39" color="white"
        
        />
      }
    >
      <ul className="hs-upcoming-visits">
        {upcomingVisits.map((visit) => (
          <li
            key={visit.id}
            className={`hs-visit-card hs-visit-card--${visit.tone}`}
          >
            <div className="hs-visit-card__icon-wrap" aria-hidden>
              <RadiationIcon className="hs-visit-card__icon" height="22" width="22" />
            </div>

            <div className="hs-visit-card__body">
              <p className="hs-visit-card__title">
                {visit.patient} - {visit.service}
              </p>
              <p className="hs-visit-card__meta">
                <span className="hs-visit-card__meta-dot" aria-hidden />
                {visit.location} • {visit.tests}
              </p>
            </div>

            <div className="hs-visit-card__aside">
              <p className="hs-visit-card__time">{visit.time}</p>
              <span className="hs-visit-card__badge">Upcoming</span>
            </div>

            <TimerIcon className="hs-visit-card__timer" height="20" width="20" aria-hidden />
          </li>
        ))}
      </ul>
    </DashboardPanel>
  );
}
