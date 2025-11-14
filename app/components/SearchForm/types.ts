import { Dayjs } from "dayjs";
import { Location } from "@/app/data/locations";

export interface TabConfig {
  key: string;
  label: string;
  icon: string;
  iconColor: string;
  iconBgColor: string;
  sectionBgColor: string;
}

export const TAB_CONFIG: TabConfig[] = [
  {
    key: "bus",
    label: "Bus & Shuttle",
    icon: "/bus-filled.svg",
    iconColor: "#19C0FF",
    iconBgColor: "#D3F3FF",
    sectionBgColor: "#EBF9FF",
  },
  {
    key: "hotel",
    label: "Hotel & Accommodation",
    icon: "/hotel.svg",
    iconColor: "#447A11",
    iconBgColor: "#E8FBCC",
    sectionBgColor: "#F4FFEB",
  },
  {
    key: "flight",
    label: "Flight",
    icon: "/plane-filled.svg",
    iconColor: "#6366F1",
    iconBgColor: "#E0E7FF",
    sectionBgColor: "#EEF2FF",
  },
];

export interface ValidationErrors {
  fromLocation?: string;
  toLocation?: string;
  departureDate?: string;
  returnDate?: string;
}

export interface LocationInputProps {
  label: "From" | "To";
  value: string;
  onChange: (value: string) => void;
  availableLocations: Location[];
  excludedLocation?: string;
  error?: string;
}

export interface DepartureDateInputProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  error?: string;
}

export interface ReturnDateInputProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  isRoundTrip: boolean;
  onRoundTripChange: (checked: boolean) => void;
  departureDate: Dayjs | null;
  error?: string;
}

export interface PassengerInputProps {
  value: number;
  onChange: (value: number) => void;
}

export interface BusSearchFormProps {
  fromLocation: string;
  toLocation: string;
  departureDate: Dayjs | null;
  returnDate: Dayjs | null;
  isRoundTrip: boolean;
  passengers: number;
  availableLocations: Location[];
  errors: ValidationErrors;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onDepartureDateChange: (date: Dayjs | null) => void;
  onReturnDateChange: (date: Dayjs | null) => void;
  onRoundTripChange: (checked: boolean) => void;
  onPassengersChange: (value: number) => void;
  onSwap: () => void;
  onSearch?: () => void;
}

