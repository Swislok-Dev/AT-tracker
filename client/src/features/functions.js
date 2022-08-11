const now = new Date();

export const convertISOTimeToDateTime = (time) => {
  return new Date(time);
};

export const findNextFlight = (flightsArray) => {
  let currentFlight;

  for (let i = 0; i < flightsArray.length; i++) {
    let flightTime = convertISOTimeToDateTime(flightsArray[i].scheduled_off);
    let nextFlight = flightsArray[i + 1];
    if (flightTime > now && nextFlight.status !== "Scheduled") {
      if (nextFlight.status.includes("En Route")) {
        currentFlight = nextFlight;
        return currentFlight;
      }
      currentFlight = flightsArray[i];
    } else {
    }
  }
  return currentFlight;
};
