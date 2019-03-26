const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patronSchema = new Schema({
  name: {
    type: String, required: true
  },
  address: {
    type: Number, required: true
  },
    city: {
    type: String, required: true
  },
  state: {
    type: String, required: true
  },
  email: {
    type: String, required: true
  },
  phoneNumber: {
    type: Number, required: true
  }
});

const Patron = mongoose.model("Patron", patronSchema);
module.exports = Patron;