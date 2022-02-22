const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const patientRoutes = require('./routes/patients');
const feedRoutes = require('./routes/feed');
const patientPageRoutes = require("./routes/patientsPage");
// var compression = require('compression');
// var helmet = require('helmet');
const app = express();
//const cors = require('cors');

//Use .env file in config folder
require('dotenv').config({
    path: './.env '
})

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

// Load and initialize MesageBird SDK
var messagebird = require('messagebird')(process.env.MESSAGEBIRD_API_KEY);

// Set up Appointment "Database"
var AppointmentDatabase = [];

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));
app.use(express.static(__dirname + '/public/imgs'))

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());
// app.use(helmet());
// app.use(compression());

//Setup Routes For Which The Server Is Listening
//This tells the app where to find its views, 
//what engine to use to render those views.it tells express
//that requests to http://localhost:5000/should use the main router file
app.use("/", mainRoutes)

//requests to http://localhost:5000/patients should use the patients router file
app.use("/patients", patientRoutes)
app.use("/patientsPage", patientPageRoutes);
app.use("/feed", feedRoutes)
app.use("/book", bookRoutes)
app.use("/review", reviewRoutes)

//Server Running

app.listen(process.env.PORT || 5000, function() {

    console.log("Server is running, you better catch it!");
});