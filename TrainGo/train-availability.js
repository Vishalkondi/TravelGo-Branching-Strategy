
const trainAvailability = [
  {
    trainNumber: "12627",
    trainName: "Karnataka Express",
    class: "SL",
    totalSeats: 500,
    availableSeats: 120
  },
  {
    trainNumber: "12627",
    trainName: "Karnataka Express",
    class: "3A",
    totalSeats: 100,
    availableSeats: 25
  },
  {
    trainNumber: "12727",
    trainName: "Godavari Express",
    class: "SL",
    totalSeats: 450,
    availableSeats: 0
  }
];

function checkAvailability(trainNumber) {
  const results = trainAvailability.filter(
    train => train.trainNumber === trainNumber
  );

  if (results.length === 0) {
    console.log("Train not found");
    return;
  }

  console.log("Train Availability:");

  results.forEach(train => {
    console.log(`Train: ${train.trainName}`);
    console.log(`Class: ${train.class}`);
    console.log(`Available Seats: ${train.availableSeats}`);

    if (train.availableSeats > 0) {
      console.log("Status: AVAILABLE");
    } else {
      console.log("Status: WAITING LIST / NOT AVAILABLE");
    }

    console.log("--------------------");
  });
}

checkAvailability("12627");

module.exports = { checkAvailability };

