const express = require("express");
const {mongoose} = require("./src/models/database");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./src/routes/api/users");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./src/config/passport")(passport);

// Routes
app.use("/api/users", users);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));