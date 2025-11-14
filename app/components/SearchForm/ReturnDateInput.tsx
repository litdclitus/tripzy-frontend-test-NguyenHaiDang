import { Checkbox } from "antd";
import dayjs from "dayjs";
import DoublePanelDatePicker from "./DoublePanelDatePicker";
import { ReturnDateInputProps } from "./types";

export default function ReturnDateInput({
  value,
  onChange,
  isRoundTrip,
  onRoundTripChange,
  departureDate,
  error,
}: ReturnDateInputProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <Checkbox
          checked={isRoundTrip}
          onChange={(e) => {
            onRoundTripChange(e.target.checked);
            if (!e.target.checked) {
              onChange(null);
            }
          }}
        />
        <label className="text-xs font-semibold text-gray-600 uppercase">
          Round Trip
        </label>
      </div>
      <div className="relative">
        <DoublePanelDatePicker
          value={value}
          onChange={onChange}
          placeholder="DD / MM / YYYY / 00:00"
          disabled={!isRoundTrip}
          placement="bottomLeft"
          disabledDate={(current) => {
            if (!departureDate)
              return current && current.isBefore(dayjs().startOf("day"));
            return current && current.isBefore(departureDate.startOf("day"));
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
