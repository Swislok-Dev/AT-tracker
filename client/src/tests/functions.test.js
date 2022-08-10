import flights from "./flights.json";
import * as functions from "../features/functions";

const flightsArray = flights.flights

test("logs flight status", () => {
  const findFlight = functions.findNextFlight(flightsArray);
  expect(typeof findFlight).toEqual( "object")
});

test("checks to include En Route", () => {
  const findFlight = functions.findNextFlight(flightsArray);
  expect(findFlight.status).toContain("En Route")
})
