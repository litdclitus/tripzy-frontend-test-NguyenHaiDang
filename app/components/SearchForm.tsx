"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs } from "antd";
import { Dayjs } from "dayjs";
import styles from "./SearchForm/SearchForm.module.css";
import BusSearchForm from "./SearchForm/BusSearchForm";
import { TAB_CONFIG, ValidationErrors } from "./SearchForm/types";
import { locations } from "@/app/data/locations";

export default function SearchForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("bus");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengers, setPassengers] = useState<number>(1);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleSwapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!fromLocation.trim()) {
      newErrors.fromLocation = "Please select departure location";
    }

    if (!toLocation.trim()) {
      newErrors.toLocation = "Please select destination";
    }

    if (!departureDate) {
      newErrors.departureDate = "Please select departure date";
    }

    if (isRoundTrip && !returnDate) {
      newErrors.returnDate = "Please select return date";
    }

    // date is not before departure date
    if (isRoundTrip && returnDate && departureDate) {
      if (returnDate.isBefore(departureDate.startOf("day"))) {
        newErrors.returnDate = "Return date cannot be before departure date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (validateForm()) {
      // Clear errors if validation passes
      setErrors({});
      
      // Build query parameters
      const params = new URLSearchParams();
      params.append("mode", activeTab);
      params.append("from", fromLocation);
      params.append("to", toLocation);
      params.append("dep", departureDate!.format("YYYY-MM-DD"));
      if (isRoundTrip && returnDate) {
        params.append("ret", returnDate.format("YYYY-MM-DD"));
      }
      params.append("pax", passengers.toString());

      router.push(`/search?${params.toString()}`);
    }
  };

  // Clear error when data filled
  const handleFromChange = (value: string) => {
    setFromLocation(value);
    if (errors.fromLocation) {
      setErrors({ ...errors, fromLocation: undefined });
    }
  };

  const handleToChange = (value: string) => {
    setToLocation(value);
    if (errors.toLocation) {
      setErrors({ ...errors, toLocation: undefined });
    }
  };

  const handleDepartureDateChange = (date: Dayjs | null) => {
    setDepartureDate(date);
    if (errors.departureDate) {
      setErrors({ ...errors, departureDate: undefined });
    }
  };

  const handleReturnDateChange = (date: Dayjs | null) => {
    setReturnDate(date);
    if (errors.returnDate) {
      setErrors({ ...errors, returnDate: undefined });
    }
  };

  const currentTabConfig = TAB_CONFIG.find((tab) => tab.key === activeTab);

  const tabItems = TAB_CONFIG.map((tab) => ({
    key: tab.key,
    label: (
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
          style={{
            backgroundColor:
              activeTab === tab.key ? tab.iconBgColor : "transparent",
          }}
        >
          <Image
            src={tab.icon}
            alt={tab.label}
            width={20}
            height={20}
            className="transition-all duration-300"
          />
        </div>
        <span className="text-gray-900 text-lg">{tab.label}</span>
      </div>
    ),
    children: null,
  }));

  const renderContent = () => {
    if (activeTab === "bus") {
      return (
        <BusSearchForm
          fromLocation={fromLocation}
          toLocation={toLocation}
          departureDate={departureDate}
          returnDate={returnDate}
          isRoundTrip={isRoundTrip}
          passengers={passengers}
          availableLocations={locations}
          errors={errors}
          onFromChange={handleFromChange}
          onToChange={handleToChange}
          onDepartureDateChange={handleDepartureDateChange}
          onReturnDateChange={handleReturnDateChange}
          onRoundTripChange={setIsRoundTrip}
          onPassengersChange={setPassengers}
          onSwap={handleSwapLocations}
          onSearch={handleSearch}
        />
      );
    }
    return (
      <div className="py-16 text-center text-gray-500">
        <p className="text-lg">No data</p>
      </div>
    );
  };

  return (
    <div
      className={`${styles.searchCard} bg-white rounded-xl shadow-lg overflow-hidden`}
    >
      <div className={`${styles.cardHeader} relative`}>
        <div
          className="absolute top-3 bottom-3 transition-all duration-300 ease-in-out z-0 pointer-events-none rounded-lg"
          style={{
            left: `calc(${TAB_CONFIG.findIndex(
              (tab) => tab.key === activeTab
            )} * ((100% - 48px) / ${TAB_CONFIG.length}) + ${
              TAB_CONFIG.findIndex((tab) => tab.key === activeTab) + 1
            } * 12px)`,
            width: `calc((100% - 48px) / ${TAB_CONFIG.length})`,
            backgroundColor: currentTabConfig?.sectionBgColor,
          }}
        />

        {/* Menu Tabs */}
        <div className="relative z-10">
          <Tabs
            size="large"
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabItems.map((item) => ({
              key: item.key,
              label: item.label,
            }))}
            className={styles.customTabs}
          />
        </div>
      </div>

      {/* Content Body */}
      <div className="px-4 pb-6 mt-6">{renderContent()}</div>
    </div>
  );
}
