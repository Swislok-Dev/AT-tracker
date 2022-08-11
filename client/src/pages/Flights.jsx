import React from "react";
// import { getFlights } from "../features/flights/flightsSlice.js"
import {
  getInitFlights,
  getFlights,
} from "../features/flights/flightsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import * as functions from "../features/functions";
import FlightsList from "../components/FlightsList"

function Flights() {
  const dispatch = useDispatch();
  const { flights } = useSelector((state) => state.flightsState);

  // eslint-disable-next-line
  const getFlightsButton = () => {
    dispatch(getFlights("ua4"));
  };

  const buttonPush = () => {
    console.clear();
    dispatch(getInitFlights());
  };

  // eslint-disable-next-line
  const listFlights = () => {
    // console.clear();

    const nextFlight = functions.findNextFlight(flights);
   return  <FlightsList nextFlight={nextFlight} />
    // return nextFlight.ident

  };

  return (
    <div id="flights-page">
      <h2>Find a Flight</h2>
      <button onClick={buttonPush}>GET Flight info</button>
      {flights.length > 0 ? listFlights()  : "Will put flights info here"}
    </div>
  );
}

export default Flights;
