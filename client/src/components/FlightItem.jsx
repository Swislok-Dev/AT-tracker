import React from "react";

export default function FlightItem(props) {
  const { nextFlight } = props;

  const convertDate = (date) => {
    if (date) {
      const toDateString = new Date(date);
      const newDate = toDateString.toUTCString().split("GMT")[0];
      return newDate;
    }
  };
  console.log(convertDate(nextFlight.scheduled_off));

  return (
    <>
      <div className="grid-container flight-item-grid">
        <div className="flight-heading">
          <h2>
            Flight
            <br />
            {nextFlight.ident_iata}
          </h2>

          <h3>{nextFlight.status}</h3>

        </div>

        <div className="flight-grid-item">
          <table>
            <thead>DEPARTURE</thead>
            <tr>
              <td>Airport</td>
              <td>{nextFlight.origin.code_iata}</td>
            </tr>
            <tr>
              <td>Scheduled Takeoff</td>
              <td>{convertDate(nextFlight.scheduled_off)}</td>
            </tr>
            <tr>
              <td>Actual Takeoff</td>
              <td>{convertDate(nextFlight.actual_off)}</td>
            </tr>
            <tr>
              <td>Terminal</td>
              <td>{nextFlight.terminal_origin}</td>
            </tr>
            <tr>
              <td>Gate</td>
              <td>{nextFlight.gate_origin}</td>
            </tr>
          </table>

          <table>
            <thead>ARRIVAL</thead>
            <tr>
              <td>Airport</td>
              <td>{nextFlight.destination.code_iata}</td>
            </tr>
            <tr>
              <td>Scheduled Arrival</td>
              <td>{convertDate(nextFlight.scheduled_on)}</td>
            </tr>
            <tr>
              <td>Actual Arrival</td>
              <td>{convertDate(nextFlight.actual_on)}</td>
            </tr>
            <tr>
              <td>Terminal</td>
              <td>{nextFlight.terminal_destination}</td>
            </tr>
            <tr>
              <td>Gate</td>
              <td>{nextFlight.gate_destination}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
