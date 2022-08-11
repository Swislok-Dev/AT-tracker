import React from "react";

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
      <ul className="flight-details">
        <li>Flight Number: {ident_iata}</li>
        <li>Tail Number: {registration}</li>
        <li>Aircraft Type: {aircraft_type}</li>

        <li>Scheduled takeoff: {nextFlight.scheduled_off}</li>
        <li>Scheduled arrival: {nextFlight.scheduled_on}</li>

        <li>Origin: {origin.code_iata} </li>
        <li>Destination: {destination.code}</li>

        <li>Progress: {progress_percent}%</li>
        <li>Flight Status: {status}</li>
        <li>Gate Origin: {gate_origin}</li>
        <li>Terminal Origin: {terminal_origin}</li>
        <li>Gate Destination: {gate_destination}</li>
        <li>Gate Terminal: {terminal_destination}</li>
      </ul>
    </>
  );
}

export default FlightsList;
