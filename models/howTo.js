const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const howToSchema = new Schema({
  userId: {
    type: Number, required: true
  },
  contact: {
    type: String, required: true
  },
  address: {
    type: Number, required: true
  },
  email: {
    type: Date, required: true
  },
  phoneNumber: {
    type: Boolean, required: true
  }
});

const HowTo = mongoose.model("HowTo", howToSchema);
module.exports = HowTo;