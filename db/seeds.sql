MODELS - .JS
const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

// define our homeAwayFromHomeschema
// users, patrons, property, reservation, registration, infoListing optionalServices, amenities, userId
const homeAwayFromHome = new Schema({
  user: {
    type: String,
    required: true
  },
  patrons: String,
  property:Array,
  reservation: String,
  registration:String,
  infoListing: String,
  optionalServices: String,
  amenities: String,
  userId: unique,

});

// create our model using mongoose and the schema we just created
const HomeAwayFromHome = mongoose.model("HomeAwayFromHome", homeAwayFromHomeSchema);

module.exports = HomeAwayFromHome;
