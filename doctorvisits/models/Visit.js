// const mongoose = require("mongoose");

// const VisitSchema = new mongoose.Schema({
//     visitDate: {
//         type: Date,
//         required: true,
//     },
//     followUpDate: {
//         type: Date,
//         required: true,
//     },
//     review: {
//         type: Number,
//         required: true,
//     },
//     likes: {
//         type: Number,
//         required: true,
//     },
//     doctor: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Doctor",
//     },
//     patient: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Patient",
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     // image: {
//     //     type: String,
//     //     require: true,
//     // },
//     // cloudinaryId: {
//     //     type: String,
//     //     require: true,
//     // },
//     // caption: {
//     //     type: String,
//     //     required: true,
//     // },
// });

// module.exports = mongoose.model("Visit", VisitSchema);