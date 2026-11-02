
const bookings = [];

function bookTrain(trainNumber, passengerName, travelClass) {
  if (!trainNumber || !passengerName || !travelClass) {
    console.log("Please provide all booking details.");
    return;
  }

  const booking = {
    bookingId: "TRN" + Date.now(),
    trainNumber,
    passengerName,
    travelClass,
    status: "CONFIRMED"
  };

  bookings.push(booking);

  console.log("Train Booking Successful!");
  console.log("-------------------------");
  console.log("Booking ID:", booking.bookingId);
  console.log("Train Number:", booking.trainNumber);
  console.log("Passenger:", booking.passengerName);
  console.log("Class:", booking.travelClass);
  console.log("Status:", booking.status);
}

bookTrain("12627", "Vishal", "3A");

module.exports = { bookTrain };

