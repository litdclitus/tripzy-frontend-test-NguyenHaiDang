import { AutoComplete } from "antd";
import Image from "next/image";
import { useMemo, useState, useCallback } from "react";
import { filterLocations } from "@/app/data/locations";
import { LocationInputProps } from "./types";

const FromToIcon = () => (
  <Image
    src="/from-to.svg"
    alt="Bus Icon"
    width={16}
    height={16}
    className="mr-1"
  />
);

export default function LocationInput({
  label,
  value,
  onChange,
  availableLocations,
  excludedLocation,
  error,
}: LocationInputProps) {
  const [searchValue, setSearchValue] = useState(value);

  // Memoize filtered options
  const options = useMemo(() => {
    let filtered = availableLocations;

    if (excludedLocation) {
      filtered = filtered.filter(
        (loc) =>
          loc.english_name !== excludedLocation &&
          loc.short_code !== excludedLocation &&
          loc.code_state !== excludedLocation
      );
    }

    if (searchValue) {
      filtered = filterLocations(searchValue, filtered);
    }

    return filtered.map((location) => ({
      value: location.english_name,
      label: (
        <div style={{ padding: "8px" }}>
          <div className="text-sm font-normal text-gray-900">
            {location.short_code} - {location.english_name}
          </div>
          <div className="text-xs text-gray-500">{location.code_state}</div>
        </div>
      ),
    }));
  }, [availableLocations, excludedLocation, searchValue]);

  const handleSearch = useCallback((val: string) => {
    setSearchValue(val);
  }, []);

  const handleChange = useCallback((val: string) => {
    setSearchValue(val);
    onChange(val);
  }, [onChange]);

  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">
        {label}
      </label>
      <div className="relative">
        <AutoComplete
          size="large"
          value={value}
          onChange={handleChange}
          onSearch={handleSearch}
          options={options}
          placeholder="Enter city, terminal..."
          className="w-full"
          prefix={<FromToIcon />}
          filterOption={false}
          popupMatchSelectWidth={false}
          dropdownStyle={{ width: 324 }}
          listHeight={310}
          status={error ? "error" : ""}
        />
        {error && (
          <div className="absolute left-0 top-full text-red-500 text-xs mt-1">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
