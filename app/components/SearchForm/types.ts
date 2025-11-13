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

export const LOCATIONS = [
  { value: "Ben Thanh", label: "Ben Thanh" },
  { value: "District 1", label: "District 1" },
  { value: "District 3", label: "District 3" },
  { value: "Tan Binh", label: "Tan Binh" },
  { value: "Binh Thanh", label: "Binh Thanh" },
  { value: "Phu Nhuan", label: "Phu Nhuan" },
  { value: "Go Vap", label: "Go Vap" },
  { value: "Thu Duc", label: "Thu Duc" },
];

