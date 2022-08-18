import React from "react";

export default function FlightItem({ nextFlight, flightNumber }) {

  const convertDate = (date) => {
    if (date) {
      const toDateString = new Date(date);
      const newDate = toDateString.toUTCString().split("GMT")[0];
      return newDate;
    }
  };

  const displayFlightNumber = (flightNumber) => {
    return flightNumber.toUpperCase()
  };

  const placeDate = () => {
    let date = new Date();
    return convertDate(date);
  };

  return (
    <>
      <div className="grid-container flight-item-grid">
        <div className="flight-heading">
          <h2>
            Flight
            <br />
            {displayFlightNumber(flightNumber)}
          </h2>

          <h3>{nextFlight.status}</h3>
          <h4>{placeDate()} UTC</h4>
        </div>

        <div className="flight-grid-item">
          <h3 className="departure-heading">Departure</h3>
          <h3 className="arrival-heading">Arrival</h3>
          <table className="departure-table">
            <tbody>
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
            </tbody>
          </table>

          <table className="arrival-table">
            <tbody>
              <tr>
                <td>Airport</td>
                <td>{nextFlight.destination.code_iata}</td>
              </tr>
              <tr>
                <td>Scheduled Arrival</td>
                <td>{convertDate(nextFlight.scheduled_on)}</td>
              </tr>
              <tr>
                <td>Estimated Arrival</td>
                <td>{convertDate(nextFlight.estimated_on)}</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
