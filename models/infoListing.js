const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoListingSchema = new Schema({
  userId: {
    type: Number, required: true
  },
  listing: {
    type: String, required: true
  },
  owner: {
    type: String, required: true
  },
  location: {
    type: String, required: true
  },
  description: {
    type: String, required: true
  }
});

const InfoListing = mongoose.model("Infolisting", infoListingSchema);
module.exports = infoListing;