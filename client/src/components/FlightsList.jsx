import React from "react";
import FlightItem from "./FlightItem"

function FlightsList(props) {
  const { nextFlight } = props;

  return (
    <>
      <br/>
      <FlightItem nextFlight={nextFlight} />

    </>
  );
}

export default FlightsList;
