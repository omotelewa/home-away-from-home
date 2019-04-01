const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amenitiesSchema = new Schema({
   propertyId: {
    type: Number, required: true
  },
  location: {
    type: String, required: true
  },
  Pool: {
    type: String, required: true
  },
  TennisCourts: {
    type: String, required: true
  },
  Boatlift: {
    type: String, required: true
  },
  SquashCourt: {
    type: String, required: true
  }
});

const Amenities = mongoose.model("Amenities", amenitiesSchema);
module.exports = Amenities;