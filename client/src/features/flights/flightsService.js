import axios from "axios"
import flights from "../../tests/flights.json"

const API_URL = "/api/flights/"

// Get flight info by flight number {ident}
export const getFlightInfo = async (flightNumber) => {
  const response = await axios.get(API_URL + flightNumber)

  return response.data
}

export const getMockFlights = async () => {
  return flights.flights
}
const flightsService = {
  getFlightInfo,
  getMockFlights
}

export default flightsService
