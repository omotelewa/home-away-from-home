const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
   propertyId: {
    type: Number, required: true
  },
  location: {
    type: String, required: true
  },
  regular: {
    type: String, required: true
  },
  luxury: {
    type: String, required: true
  },
  interational: {
    type: String, required: true
  },
  island: {
    type: String, required: true
  },
  landAndSea: {
    type: String, required: true
  }
});

const property = mongoose.model("Property", propertySchema);
module.exports = Properties;