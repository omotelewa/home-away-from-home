const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evalFeedbackSchema = new Schema({
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

const evalFeedback = mongoose.model("EvalFeedback", evalFeedbackSchema);
module.exports = EvalFeedback;