import { Row, Col } from "antd";
import { Dayjs } from "dayjs";
import LocationInput from "./LocationInput";
import SwapButton from "./SwapButton";
import DepartureDateInput from "./DepartureDateInput";
import ReturnDateInput from "./ReturnDateInput";
import PassengerInput from "./PassengerInput";
import SearchButton from "./SearchButton";

interface BusSearchFormProps {
  fromLocation: string;
  toLocation: string;
  departureDate: Dayjs | null;
  returnDate: Dayjs | null;
  isRoundTrip: boolean;
  passengers: number;
  isSwapped: boolean;
  locations: { value: string; label: string }[];
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onDepartureDateChange: (date: Dayjs | null) => void;
  onReturnDateChange: (date: Dayjs | null) => void;
  onRoundTripChange: (checked: boolean) => void;
  onPassengersChange: (value: number) => void;
  onSwap: () => void;
  onSearch?: () => void;
}

export default function BusSearchForm({
  fromLocation,
  toLocation,
  departureDate,
  returnDate,
  isRoundTrip,
  passengers,
  isSwapped,
  locations,
  onFromChange,
  onToChange,
  onDepartureDateChange,
  onReturnDateChange,
  onRoundTripChange,
  onPassengersChange,
  onSwap,
  onSearch,
}: BusSearchFormProps) {
  return (
    <div className="space-y-4">
      <Row gutter={[16, 16]} align="bottom">
        {/* FROM/TO */}
        <Col xs={24} sm={11} lg={{ flex: '0 0 228px' }}>
          {isSwapped ? (
            <LocationInput
              label="To"
              value={toLocation}
              onChange={onToChange}
              options={locations}
            />
          ) : (
            <LocationInput
              label="From"
              value={fromLocation}
              onChange={onFromChange}
              options={locations}
            />
          )}
        </Col>

        {/* Swap */}
        <Col flex="0 0 48px" className="flex justify-center items-end px-0!">
          <SwapButton onClick={onSwap} />
        </Col>

        <Col xs={24} sm={11} lg={{ flex: '0 0 228px' }}>
          {isSwapped ? (
            <LocationInput
              label="From"
              value={fromLocation}
              onChange={onFromChange}
              options={locations}
            />
          ) : (
            <LocationInput
              label="To"
              value={toLocation}
              onChange={onToChange}
              options={locations}
            />
          )}
        </Col>

        {/* DEPARTURE DATE */}
        <Col xs={24} sm={12} md={8} lg={5}>
          <DepartureDateInput
            value={departureDate}
            onChange={onDepartureDateChange}
          />
        </Col>

        {/* RETURN DATE */}
        <Col xs={24} sm={12} md={8} lg={5}>
          <ReturnDateInput
            value={returnDate}
            onChange={onReturnDateChange}
            isRoundTrip={isRoundTrip}
            onRoundTripChange={onRoundTripChange}
            departureDate={departureDate}
          />
        </Col>

        {/* NUMBER OF PASSENGER */}
        <Col xs={24} sm={12} lg={3}>
          <PassengerInput value={passengers} onChange={onPassengersChange} />
        </Col>
      </Row>

      <SearchButton onClick={onSearch} />
    </div>
  );
}
