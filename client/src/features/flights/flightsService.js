import axios from "axios"

const API_URL = "/api/flights/"

// Get flight info by flight number {ident}
export const getFlightInfo = async (flightNumber) => {
  const response = await axios.get(API_URL + flightNumber)

  return response.data
}
const flightsService = {
  getFlightInfo
}

export default flightsService