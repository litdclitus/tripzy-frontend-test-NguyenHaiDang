import { AutoComplete } from "antd";
import Image from "next/image";

interface LocationInputProps {
  label: "From" | "To";
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

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
  options,
}: LocationInputProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">
        {label}
      </label>
      <AutoComplete
        size="large"
        value={value}
        onChange={onChange}
        options={options}
        placeholder="Enter city, terminal..."
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        className="w-full"
        popupClassName="location-dropdown"
        prefix={<FromToIcon />}
      />
    </div>
  );
}
