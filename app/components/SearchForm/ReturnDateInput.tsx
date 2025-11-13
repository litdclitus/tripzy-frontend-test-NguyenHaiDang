import { Checkbox } from "antd";
import dayjs, { Dayjs } from "dayjs";
import DoublePanelDatePicker from "./DoublePanelDatePicker";

interface ReturnDateInputProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  isRoundTrip: boolean;
  onRoundTripChange: (checked: boolean) => void;
  departureDate: Dayjs | null;
}

export default function ReturnDateInput({
  value,
  onChange,
  isRoundTrip,
  onRoundTripChange,
  departureDate,
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
      <DoublePanelDatePicker
        value={value}
        onChange={onChange}
        placeholder="DD / MM / YYYY"
        disabled={!isRoundTrip}
        placement="bottomLeft"
        disabledDate={(current) => {
          if (!departureDate)
            return current && current.isBefore(dayjs().startOf("day"));
          return current && current.isBefore(departureDate.startOf("day"));
        }}
      />
    </div>
  );
}
