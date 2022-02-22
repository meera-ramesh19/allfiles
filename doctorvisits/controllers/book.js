const router = express.Router()
const bookController = require('../controllers/book')
const User = require('../models/User')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
var moment = require('moment')

// const multer = require('multer')
// const upload = multer({ dest: "public/uploads/" })
// const { storage } = require("../middleware/multer");


module.exports = {
        getReminders: async(req, res) => {
            // console.log(req.user)
            // try {
            //     const patientItems = await Patient.find({ userId: req.user.id });

            //     res.render("profile.ejs", { patient: patientItems, user: req.user });
            // } catch (err) {
            //     console.log(err);
            // }
            var earliestPossibleDT = moment().subtract(1, 'days').calendar();
            // var earliestPossibleDT = moment().add({ hours: 3, minutes: 5 });
            var appointmentDT = moment(req.body.date + " " + req.body.time);
            if (appointmentDT.isBefore(earliestPossibleDT)) {
                // If not, show an error
                res.render('home', {
                    error: "You can only book appointments that are at least 3 hours in the future!",
                    name: req.body.patName,
                    // treatment: req.body.treatment,
                    number: req.body.number,
                    date: req.body.date,
                    time: req.body.time
                });
                return;

                // Check if phone number is valid
                messagebird.lookup.read(req.body.number, process.env.COUNTRY_CODE, function(err, response) {
                    console.log(err);
                    console.log(response);

                    if (err && err.errors[0].code == 21) {
                        // This error code indicates that the phone number has an unknown format
                        res.render('home', {
                            error: "You need to enter a valid phone number!",
                            name: req.body.patName,
                            // treatment: req.body.treatment,
                            number: req.body.number,
                            date: req.body.date,
                            time: req.body.time
                        });
                        return;
                    } else
                    if (err) {
                        // Some other error occurred
                        res.render('home', {
                            error: "Something went wrong while checking your phone number!",
                            name: req.body.patName,
                            // treatment: req.body.treatment,
                            number: req.body.number,
                            date: req.body.date,
                            time: req.body.time
                        });
                    } else
                    if (response.type != "mobile") {
                        // The number lookup was successful but it is not a mobile number
                        res.render('home', {
                            error: "You have entered a valid phone number, but it's not a mobile number! Provide a mobile number so we can contact you via SMS.",
                            name: req.body.patName,
                            // treatment: req.body.treatment,
                            number: req.body.number,
                            date: req.body.date,
                            time: req.body.time
                        });
                    } else {
                        // Everything OK

                        // Schedule reminder 1 day prior to the appointment
                        var reminderDT = appointmentDT.clone().subtract(1, 'days').calendar();
                        //.subtract({ hours: 3 });

                        // Send scheduled message with MessageBird API
                        messagebird.messages.create({
                            originator: req.body.docName,
                            recipients: [response.phoneNumber], // normalized phone number from lookup request
                            scheduledDatetime: reminderDT.format(),
                            body: req.body.patName + ", here's a reminder that you have a " + req.body.docName + " scheduled for " + appointmentDT.format('HH:mm') + ". See you soon!"
                        }, function(err, response) {
                            if (err) {
                                // Request has failed
                                console.log(err);
                                res.send("Error occured while sending message!");
                            } else {
                                // Request was successful
                                console.log(response);

                                // Create and persist appointment object
                                var appointment = {
                                    name: req.body.patName,
                                    docName: req.body.docName,
                                    number: req.body.number,
                                    appointmentDT: appointmentDT.format('Y-MM-DD HH:mm'),
                                    reminderDT: reminderDT.format('Y-MM-DD HH:mm')
                                }
                                AppointmentDatabase.push(appointment);

                                // Render confirmation page
                                res.render('confirm', appointment);
                            }
                        });
                    }
                });
            }
        }