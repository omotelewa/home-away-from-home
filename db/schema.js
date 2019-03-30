// create our model using mongoose and the schema we just created
const Books = mongoose.model("HomeAwayFromHome", HomeAwayFromHomeSchema);

module.exports = HomeAwayFromHome;


MODELS

INDEX.JS

// collect other models and export
module.exports = {
  homeAwayFromHome: require('./homeAwayFromHome')
};