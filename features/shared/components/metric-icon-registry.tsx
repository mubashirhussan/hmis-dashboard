
import Flower3Icon from "@iconify-react/bi/flower3";

import LabIcon from "@iconify-react/icomoon-free/lab";
import UsersFillIcon from "@iconify-react/mage/users-fill";
import BloodBankIcon from "@iconify-react/maki/blood-bank";
import FinanceModeRoundedIcon from "@iconify-react/material-symbols/finance-mode-rounded";

import CheckCircleOutlineRoundedIcon from "@iconify-react/material-symbols-light/check-circle-outline-rounded";

import TimerIcon from "@iconify-react/material-symbols-light/timer";

import CircleDoubleIcon from "@iconify-react/mdi/circle-double";

import HandCoinIcon from "@iconify-react/mdi/hand-coin-outline";

import type { ComponentType } from "react";
import type { MetricCardIcon } from "@/features/shared/types/metric-card";


import TestTubeHeldIcon from '@iconify-react/game-icons/test-tube-held';
import Home1SolidIcon from '@iconify-react/streamline-plump/home-1-solid';
import WorkOrderAppointmentOutlineIcon from '@iconify-react/lsicon/work-order-appointment-outline';
import FileDocumentBoxMultipleIcon from '@iconify-react/mdi/file-document-box-multiple';
import TimerOutlineRoundedIcon from '@iconify-react/material-symbols/timer-outline-rounded';
import AbnormalIcon from '@iconify-react/icon-park-solid/abnormal';
import RepeatIcon from '@iconify-react/jam/repeat';
  import BoxOutlineIcon from '@iconify-react/solar/box-outline';
  import PersonSpeakerIcon from '@iconify-react/gravity-ui/person-speaker';
  import Computer16Icon from '@iconify-react/qlementine-icons/computer-16';
  import CalendarLinearIcon from '@iconify-react/solar/calendar-linear';
  import IbmMatch360Icon from '@iconify-react/carbon/ibm-match-360';
  import MoneyBagIcon from '@iconify-react/healthicons/money-bag';
  import DiscountLightIcon from '@iconify-react/iconamoon/discount-light';
  import BuildingOutlineIcon from '@iconify-react/flowbite/building-outline';
  import TimerSandIcon from '@iconify-react/mdi/timer-sand';
  import RefundIcon from '@iconify-react/gridicons/refund';
    import MicroscopeSolidIcon from '@iconify-react/flowbite/microscope-solid';
    import RadiationAltIcon from '@iconify-react/fa-solid/radiation-alt';
    import RatingStarWinnerIcon from '@iconify-react/streamline-ultimate-color/rating-star-winner';


export const METRIC_ICON_COLOR = "#026bb1";

type IconifyComponent = ComponentType<Record<string, unknown>>;

export const metricIconifyRegistry: Record<MetricCardIcon, IconifyComponent> = {
  "users-group": UsersFillIcon,
  "lab-flask": TestTubeHeldIcon,
  "compliance-docs": FileDocumentBoxMultipleIcon,
  "pending-orders": WorkOrderAppointmentOutlineIcon,
  "home-visits": Home1SolidIcon,
  "lab-completed": TestTubeHeldIcon,
  "avg-tat-stopwatch": TimerOutlineRoundedIcon,
  "critical-info": AbnormalIcon,
  "repeat-rate": RepeatIcon,
  "rejected-tests": WorkOrderAppointmentOutlineIcon,
  "home-samples": BoxOutlineIcon,
  "exams-user": PersonSpeakerIcon,
  "pacs-monitor": Computer16Icon,
  "reports-pending": FileDocumentBoxMultipleIcon,
  "report-tat": TimerIcon,
  "ct-scan": CalendarLinearIcon,
  "mri-scan": CalendarLinearIcon,
  "home-imaging": Home1SolidIcon,
  "blood-stock": TestTubeHeldIcon,
  "cross-match": IbmMatch360Icon,
  "blood-donation": HandCoinIcon,
  "blood-issued": AbnormalIcon,
  "blood-screening": Home1SolidIcon,
  "blood-nat": Home1SolidIcon,
  "revenue-money": MoneyBagIcon,
  "finance-discount": DiscountLightIcon,
  "finance-panel": BuildingOutlineIcon,
  "collection-hourglass": TimerSandIcon,
  "refunds-undo": RefundIcon,
  "home-visits-main": Home1SolidIcon,
  "home-lab": TestTubeHeldIcon,
  ultrasound: MicroscopeSolidIcon,
  xray: RadiationAltIcon,
  "avg-response": TimerIcon,
  "rating-stars": RatingStarWinnerIcon,
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
