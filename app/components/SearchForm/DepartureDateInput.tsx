import dayjs from "dayjs";
import DoublePanelDatePicker from "./DoublePanelDatePicker";
import { DepartureDateInputProps } from "./types";

export default function DepartureDateInput({
  value,
  onChange,
  error,
}: DepartureDateInputProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">
        Departure Date
      </label>
      <div className="relative">
        <DoublePanelDatePicker
          value={value}
          onChange={onChange}
          placeholder="DD / MM / YYYY / 00:00"
          placement="bottomRight"
          disabledDate={(current) => {
            return current && current.isBefore(dayjs().startOf("day"));
          }}
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
