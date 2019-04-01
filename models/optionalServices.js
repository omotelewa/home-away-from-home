const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionalServicesSchema = new Schema({
  inHouseChef: {
    type: String, required: true
  },
  laundry: {
    type: String, required: true
  },
  babySitting: {
    type: String, required: true
  },
  groceriesDelivery: {
    type: String, required: true
  },
  maidServices: {
    type: String, required: true
  }
});

const OptionalServices = mongoose.model("OptionalServices", optionalServicesSchema);
module.exports = OptionalServices;