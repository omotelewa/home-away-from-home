const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  propertyId: { type: Number, require: true},
  name: { type: String},
  location: { type: String},
  amenities: { type: String},
  classification: { type: String},
  minimum_stay: { type: String},
  pricing: { type: String},
  rental_agreement: { type: String},
  season: { type: String}
});

const property = mongoose.model("Property", propertySchema);
module.exports = property;