import { InputNumber } from "antd";
import { PassengerInputProps } from "./types";

const PassengerIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8C9.933 8 11.5 6.433 11.5 4.5C11.5 2.567 9.933 1 8 1C6.067 1 4.5 2.567 4.5 4.5C4.5 6.433 6.067 8 8 8ZM8 9.5C5.665 9.5 1 10.67 1 13V14.5H15V13C15 10.67 10.335 9.5 8 9.5Z"
      fill="currentColor"
    />
  </svg>
);

export default function PassengerInput({
  value,
  onChange,
}: PassengerInputProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">
        No. of Passenger
      </label>
      <InputNumber
        size="large"
        min={1}
        max={50}
        value={value}
        onChange={(val) => onChange(val || 1)}
        className="w-full"
        prefix={<PassengerIcon />}
      />
    </div>
  );
}
