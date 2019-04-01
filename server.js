//import all dependencies

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

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(routes);

mongoose.connect('mongodb://127.0.0.1/homeOwners')

const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



//import models
// const db = require("./models");

// app.use(passport.initialize());
// app.use(passport.session());


// turning on our mongo models and turns on the app
// db.mongoose().then(function () {
//   app.listen(PORT, function () {
//     console.log("App running on server http://localhost:" + PORT);
//     console.log(listEndpoints(app));
//   });
// });
