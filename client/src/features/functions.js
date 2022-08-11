const now = new Date();

export const convertISOTimeToDateTime = (time) => {
  return new Date(time);
};

export const findNextFlight = (flightsArray) => {
  let currentFlight;

  for (let i = 0; i < flightsArray.length; i++) {
    let flightTime = convertISOTimeToDateTime(flightsArray[i].scheduled_off);
    let nextFlight = flightsArray[i + 1];
    if (flightTime > now.setDate(9) && nextFlight.status !== "Scheduled") {
      if (nextFlight.status.includes("En Route")) {
        currentFlight = nextFlight;
        return currentFlight;
      }
      currentFlight = flightsArray[i];
    } else {
      console.log(`Flight status:${[i]} ${flightsArray[i].status}`);
    }
  }
  console.log(currentFlight);
  return currentFlight;
};

// export const hasLeft = (flight) => {
//   const now = new Date()
//   const flightTime = new Date(flight.scheduled_off)
//   if (flightTime <  now) {
//     console.log("Flight has left")
//   } else {
//     console.error("Flight hasn't left")
//   }
// }
