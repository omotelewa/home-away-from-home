const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  userId: {
    type: Number, required: true
  },
  propertyId: {
    type: Number, required: true
  },
  
  arrivalDate: {
    type: Date, required: true
  },
  departureDate: {
    type: Date, required: true
  },
  paymentType: {
    type: Boolean
  },
  numberOfGuests: {
    type: Number, required: true
  }

});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;