import React, { useState } from "react";
import { getFlights } from "../features/flights/flightsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import * as functions from "../features/functions";
import FlightsList from "../components/FlightsList";
import Spinner from "../components/Spinner";

function Flights() {
  const dispatch = useDispatch();
  const { flights, isLoading } = useSelector((state) => state.flightsState);
  const [flightNumber, setFlightNumber] = useState("");

  const listFlights = () => {
    const nextFlight = functions.findNextFlight(flights);
    return <FlightsList nextFlight={nextFlight} />;
  };

  const onChange = (e) => {
    setFlightNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getFlights(flightNumber));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div id="flights-page">
      <h2>Find a Flight</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="flightNumber"
          autoFocus
          value={flightNumber}
          onChange={(e) => onChange(e)}
          placeholder="Enter flight number"
        />
        <input type="submit" value="Find Flight" />
      </form>
      {flights.length > 0 ? listFlights() : "Will put flights info here"}
    </div>
  );
}

export default Flights;
