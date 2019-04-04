const express = require("express");
const mongoose = require("mongoose");
// const listEndpoints = require("express-list-endpoints");

//import routes
const routes = require("./routes");

//sentup all
const app = express();
const PORT = process.env.PORT || 3001;

//setup express app for dataparsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/HomeAwayFromHome_db';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
