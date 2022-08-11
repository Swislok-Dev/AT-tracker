import React from "react";
import FlightItem from "./FlightItem"

function FlightsList(props) {
  const { nextFlight } = props;
  const {
    ident_iata,
    registration,
    origin,
    destination,
    progress_percent,
    status,
    aircraft_type,
    gate_origin,
    gate_destination,
    terminal_origin,
    terminal_destination,
  } = nextFlight;

  return (
    <>
      {/*TODO: place this in a function for flight number display in sub-header*/}
      {props.nextFlight.ident}
      <br/>
      <FlightItem nextFlight={nextFlight} />

    </>
  );
}

export default FlightsList;
