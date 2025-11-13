import dayjs, { Dayjs } from "dayjs";
import DoublePanelDatePicker from "./DoublePanelDatePicker";

interface DepartureDateInputProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

export default function DepartureDateInput({
  value,
  onChange,
}: DepartureDateInputProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">
        Departure Date
      </label>
      <DoublePanelDatePicker
        value={value}
        onChange={onChange}
        placeholder="DD / MM / YYYY"
        placement="bottomRight"
        disabledDate={(current) => {
          return current && current.isBefore(dayjs().startOf("day"));
        }}
      />
    </div>
  );
}
