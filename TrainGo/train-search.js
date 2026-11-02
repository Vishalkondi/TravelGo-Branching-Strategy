
// TrainGo - Train Search Module
// Sprint 01 - Developer 1

const trains = [
  {
    trainNumber: "12627",
    trainName: "Karnataka Express",
    source: "Bangalore",
    destination: "New Delhi",
    departure: "19:20",
    arrival: "10:30"
  },
  {
    trainNumber: "12727",
    trainName: "Godavari Express",
    source: "Hyderabad",
    destination: "Visakhapatnam",
    departure: "17:30",
    arrival: "05:45"
  },
  {
    trainNumber: "12163",
    trainName: "Dadar Express",
    source: "Mumbai",
    destination: "Chennai",
    departure: "08:00",
    arrival: "06:15"
  }
];

function searchTrains(source, destination) {
  const results = trains.filter(
    train =>
      train.source.toLowerCase() === source.toLowerCase() &&
      train.destination.toLowerCase() === destination.toLowerCase()
  );

  if (results.length === 0) {
    console.log("No trains found.");
    return;
  }

  console.log("Available Trains:");

  results.forEach(train => {
    console.log(
      `${train.trainNumber} - ${train.trainName} | ` +
      `${train.source} to ${train.destination} | ` +
      `Departure: ${train.departure} | Arrival: ${train.arrival}`
    );
  });
}

// Example search
searchTrains("Bangalore", "New Delhi");

module.exports = { searchTrains };

