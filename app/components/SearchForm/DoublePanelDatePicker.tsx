import { useState } from "react";
import { Input, Popover, Calendar } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface DoublePanelDatePickerProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  placeholder?: string;
  disabled?: boolean;
  disabledDate?: (current: Dayjs) => boolean;
  placement?: "bottom" | "bottomLeft" | "bottomRight";
  status?: "" | "error" | "warning";
}

const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-black font-bold"
  >
    <path
      d="M5.33301 1.33301V3.33301M10.6663 1.33301V3.33301M2.66634 5.66634H13.333M3.33301 2.66634H12.6663C13.403 2.66634 13.9997 3.26301 13.9997 3.99967V13.333C13.9997 14.0697 13.403 14.6663 12.6663 14.6663H3.33301C2.59634 14.6663 1.99967 14.0697 1.99967 13.333V3.99967C1.99967 3.26301 2.59634 2.66634 3.33301 2.66634Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function DoublePanelDatePicker({
  value,
  onChange,
  placeholder = "DD / MM / YYYY",
  disabled = false,
  disabledDate,
  placement = "bottom",
  status = "",
}: DoublePanelDatePickerProps) {
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() =>
    value ? dayjs(value) : dayjs()
  );

  const handleSelect = (date: Dayjs) => {
    onChange(date);
    setOpen(false);
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const content = (
    <div className="flex gap-8 p-2 bg-white">
      {/* Left Calendar*/}
      <div>
        <Calendar
          fullscreen={false}
          value={currentMonth}
          onSelect={handleSelect}
          disabledDate={disabledDate}
          fullCellRender={(current) => {
            const isSelected = value && current.isSame(value, "day");
            const isInCurrentMonth = current.isSame(currentMonth, "month");
            const isToday = current.isSame(dayjs(), "day");
            const dayOfWeek = current.day();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isDisabled = disabledDate ? disabledDate(current) : false;

            return (
              <div
                className={`ant-picker-cell ant-picker-cell-in-view ${
                  isSelected && isInCurrentMonth ? "custom-selected" : ""
                } ${isToday ? "custom-today" : ""} ${
                  isWeekend && !isDisabled ? "custom-weekend" : ""
                } ${isDisabled ? "ant-picker-cell-disabled" : ""}`}
                onClick={() => !isDisabled && handleSelect(current)}
              >
                <div className="ant-picker-cell-inner">{current.date()}</div>
              </div>
            );
          }}
          headerRender={({ value: headerValue }) => {
            return (
              <div className="flex px-2 py-2 items-center justify-start">
                <button
                  onClick={handlePrevMonth}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span className="font-semibold text-base ml-4">
                  {headerValue.format("MMMM YYYY")}
                </span>
                <div className="w-8" />
              </div>
            );
          }}
        />
      </div>

      {/* Right Calendar */}
      <div>
        <Calendar
          fullscreen={false}
          value={currentMonth.add(1, "month")}
          onSelect={handleSelect}
          disabledDate={disabledDate}
          fullCellRender={(current) => {
            const isSelected = value && current.isSame(value, "day");
            const nextMonth = currentMonth.add(1, "month");
            const isInNextMonth = current.isSame(nextMonth, "month");
            const isToday = current.isSame(dayjs(), "day");
            const dayOfWeek = current.day();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isDisabled = disabledDate ? disabledDate(current) : false;

            return (
              <div
                className={`ant-picker-cell ant-picker-cell-in-view ${
                  isSelected && isInNextMonth ? "custom-selected" : ""
                } ${isToday ? "custom-today" : ""} ${
                  isWeekend && !isDisabled ? "custom-weekend" : ""
                } ${isDisabled ? "ant-picker-cell-disabled" : ""}`}
                onClick={() => !isDisabled && handleSelect(current)}
              >
                <div className="ant-picker-cell-inner">{current.date()}</div>
              </div>
            );
          }}
          headerRender={({ value: headerValue }) => {
            return (
              <div className="flex px-2 py-2 items-center justify-end">
                <div className="w-8" />
                <span className="font-semibold text-base mr-4">
                  {headerValue.format("MMMM YYYY")}
                </span>
                <button
                  onClick={handleNextMonth}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            );
          }}
        />
      </div>
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={setOpen}
      placement={placement}
      overlayClassName="double-panel-datepicker-popover"
      arrow={false}
    >
      <Input
        size="large"
        value={value ? value.format("DD / MM / YYYY") : ""}
        placeholder={placeholder}
        disabled={disabled}
        readOnly
        prefix={<CalendarIcon />}
        className="cursor-pointer"
        onClick={() => !disabled && setOpen(true)}
        status={status}
      />
    </Popover>
  );
}
