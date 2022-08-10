import React from "react";
// import { getFlights } from "../features/flights/flightsSlice.js"
import { getInitFlights, getFlights } from "../features/flights/flightsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import * as functions from "../features/functions";

function Flights() {
  const dispatch = useDispatch();
  const { flights } = useSelector((state) => state.flightsState);

  // eslint-disable-next-line
  const buttonPush = () => {
    console.log(dispatch(getInitFlights()));
  };

  const listFlights = () => {
    console.clear();

    functions.findNextFlight(flights);
  };

  return (
    <div id="flights-page">
      <h2>Find a Flight</h2>
      <button onClick={listFlights}>GET Flight info</button>
    </div>
  );
}

export default Flights;
