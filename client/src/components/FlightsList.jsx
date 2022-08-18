import React from "react";
import FlightItem from "./FlightItem"

function FlightsList(props) {
    console.log("props from FlightsList:" ,props)

  return (
    <>
      <br/>
      <FlightItem nextFlight={props.nextFlight} flightNumber={props.flightNumber} />

    </>
  );
}

export default FlightsList;
