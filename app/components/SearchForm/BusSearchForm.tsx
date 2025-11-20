import { memo } from "react";
import { Row, Col } from "antd";
import LocationInput from "./LocationInput";
import SwapButton from "./SwapButton";
import DepartureDateInput from "./DepartureDateInput";
import ReturnDateInput from "./ReturnDateInput";
import PassengerInput from "./PassengerInput";
import SearchButton from "./SearchButton";
import { BusSearchFormProps } from "./types";

function BusSearchForm({
  fromLocation,
  toLocation,
  departureDate,
  returnDate,
  isRoundTrip,
  passengers,
  availableLocations,
  errors,
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
        <Col xs={24} sm={11} lg={{ flex: "0 0 228px" }}>
          <LocationInput
            label="From"
            value={fromLocation}
            onChange={onFromChange}
            availableLocations={availableLocations}
            excludedLocation={toLocation}
            error={errors.fromLocation}
          />
        </Col>

        {/* Swap */}
        <Col flex="0 0 48px" className="flex justify-center items-end px-0!">
          <SwapButton onClick={onSwap} />
        </Col>

        <Col xs={24} sm={11} lg={{ flex: "0 0 228px" }}>
          <LocationInput
            label="To"
            value={toLocation}
            onChange={onToChange}
            availableLocations={availableLocations}
            excludedLocation={fromLocation}
            error={errors.toLocation}
          />
        </Col>

        {/* DEPARTURE DATE */}
        <Col xs={24} sm={12} md={8} lg={5}>
          <DepartureDateInput
            value={departureDate}
            onChange={onDepartureDateChange}
            error={errors.departureDate}
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
            error={errors.returnDate}
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

export default memo(BusSearchForm);
