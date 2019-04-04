var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var propertySchema = new Schema({
  name: { type: String},
  location: { type: String},
  amenities: { type: String},
  classification: { type: String},
  minimum_stay: { type: String},
  pricing: { type: String},
  rental_agreement: { type: String},
  season: { type: String}
});

var property = mongoose.model("Property", propertySchema);
module.exports = property;