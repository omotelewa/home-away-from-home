const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evaluationSchema = new Schema({
  userId: {
    type: Number, require: true
  },
  Name: {
    type: Number, required: true
  },
  evaluation: {
    type: String, required: true
  },
  feedBack: {
    type: String, required: true
  },
  departureDate: {
    type: Date, required: true
  },
  propertyId: {
    type: Boolean, required: true
  }
});

const evaluation = mongoose.model("evaluation", evaluationSchema);
module.exports = evaluation;
