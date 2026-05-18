import CalendarEventIcon from "@iconify-react/bi/calendar-event";
import Flower3Icon from "@iconify-react/bi/flower3";
import HouseIcon from "@iconify-react/bi/house";
import LabIcon from "@iconify-react/icomoon-free/lab";
import UsersFillIcon from "@iconify-react/mage/users-fill";
import BloodBankIcon from "@iconify-react/maki/blood-bank";
import FinanceModeRoundedIcon from "@iconify-react/material-symbols/finance-mode-rounded";
import PercentOutlineIcon from "@iconify-react/mdi/percent-outline";
import UndoVariantIcon from "@iconify-react/mdi/undo-variant";
import CheckCircleOutlineRoundedIcon from "@iconify-react/material-symbols-light/check-circle-outline-rounded";
import DescriptionIcon from "@iconify-react/material-symbols-light/description";
import HomeHealthIcon from "@iconify-react/material-symbols-light/home-health";
import PendingActionsIcon from "@iconify-react/material-symbols-light/pending-actions";
import TimerIcon from "@iconify-react/material-symbols-light/timer";
import AlertCircleIcon from "@iconify-react/mdi/alert-circle";
import CircleDoubleIcon from "@iconify-react/mdi/circle-double";
import ClipboardClockIcon from "@iconify-react/mdi/clipboard-clock-outline";
import FileDocumentMultipleIcon from "@iconify-react/mdi/file-document-multiple-outline";
import HandCoinIcon from "@iconify-react/mdi/hand-coin-outline";
import HospitalBuildingIcon from "@iconify-react/mdi/hospital-building";
import HourglassIcon from "@iconify-react/mdi/hourglass-empty";
import MicroscopeIcon from "@iconify-react/mdi/microscope";
import MonitorIcon from "@iconify-react/mdi/monitor";
import PackageVariantIcon from "@iconify-react/mdi/package-variant";
import RadiationIcon from "@iconify-react/mdi/radiation";
import StarIcon from "@iconify-react/mdi/star";
import StarFourPointsIcon from "@iconify-react/mdi/star-four-points-outline";
import SyncIcon from "@iconify-react/mdi/sync";
import TestTubeIcon from "@iconify-react/mdi/test-tube";
import WaterIcon from "@iconify-react/mdi/water";
import type { ComponentType } from "react";
import type { MetricCardIcon } from "@/features/shared/types/metric-card";

export const METRIC_ICON_COLOR = "#026bb1";

type IconifyComponent = ComponentType<Record<string, unknown>>;

export const metricIconifyRegistry: Record<MetricCardIcon, IconifyComponent> = {
  "users-group": UsersFillIcon,
  "lab-flask": LabIcon,
  "compliance-docs": FileDocumentMultipleIcon,
  "pending-orders": PendingActionsIcon,
  "home-visits": HomeHealthIcon,
  "lab-completed": LabIcon,
  "avg-tat-stopwatch": TimerIcon,
  "critical-info": AlertCircleIcon,
  "repeat-rate": SyncIcon,
  "rejected-tests": ClipboardClockIcon,
  "home-samples": PackageVariantIcon,
  "exams-user": UsersFillIcon,
  "pacs-monitor": MonitorIcon,
  "reports-pending": DescriptionIcon,
  "report-tat": TimerIcon,
  "ct-scan": CalendarEventIcon,
  "mri-scan": RadiationIcon,
  "home-imaging": HouseIcon,
  "blood-stock": BloodBankIcon,
  "cross-match": StarFourPointsIcon,
  "blood-donation": HandCoinIcon,
  "blood-issued": ClipboardClockIcon,
  "blood-screening": WaterIcon,
  "blood-nat": TestTubeIcon,
  "revenue-money": FinanceModeRoundedIcon,
  "finance-discount": PercentOutlineIcon,
  "finance-panel": HospitalBuildingIcon,
  "collection-hourglass": HourglassIcon,
  "refunds-undo": UndoVariantIcon,
  "home-visits-main": HouseIcon,
  "home-lab": LabIcon,
  ultrasound: MicroscopeIcon,
  xray: RadiationIcon,
  "avg-response": TimerIcon,
  "rating-stars": StarIcon,
};

export const navIconifyByModule = {
  overview: CheckCircleOutlineRoundedIcon,
  laboratory: LabIcon,
  imaging: CircleDoubleIcon,
  "blood-bank": BloodBankIcon,
  finance: FinanceModeRoundedIcon,
  "home-services": Flower3Icon,
} as const;

export {
  CheckCircleOutlineRoundedIcon,
  CircleDoubleIcon,
  Flower3Icon,
  LabIcon,
  BloodBankIcon,
  FinanceModeRoundedIcon,
};
