import React from "react";
import FlightItem from "./FlightItem"

function FlightsList(props) {
  const { nextFlight } = props;

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
