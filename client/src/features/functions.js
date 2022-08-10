const now = new Date();

const convertISOTimeToDateTime = (time) => {
  return new Date(time);
};

export const compareTimes = (now, flightTime) => {
  if (now > flightTime) {
    console.log("The flight has already left");
    console.log(now);
    console.log(flightTime);
  } else {
    console.error("The flight hasn't left yet");
    console.log(now);
    console.log(flightTime);
  }
};

export const findNextFlight = (flightsArray) => {
  let currentFlight;

  for (let i = 0; i < flightsArray.length; i++) {
    let flightTime = convertISOTimeToDateTime(flightsArray[i].scheduled_off);
    let nextFlight = flightsArray[i + 1];
    if (flightTime > now.setDate(5) && nextFlight.status !== "Scheduled") {
      if (nextFlight.status.includes("En Route")) {
        currentFlight = nextFlight;

        console.log(currentFlight);
        console.log(`Selected flight ${[i + 1]}`);
        return currentFlight;
      }
      currentFlight = flightsArray[i];
      console.log(`Selected flight number ${[i]}`);
    } else {
      console.log(`Flight status:${[i]} ${flightsArray[i].status}`);
    }
  }
  console.warn(currentFlight);
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
