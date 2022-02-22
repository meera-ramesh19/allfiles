const mongoose = require("mongoose");

const VisitInfoSchema = new mongoose.Schema({
    vitalRecordDate: {
        type: Date,
        required: true,
    },
    symptoms: {
        type: [String],
        required: true,
    },
    bloodPressure: {
        type: Number,
        required: true,
    },
    labTest: {
        type: [String],

    },
    labDateIssued: {
        type: Date,
    },
    labResultimage: {
        type: String
    },
    prescibeNumber: {
        type: Number
    },
    generalDrug: {

        type: [String],
    },
    prescriptionDrugs: {
        type: [String],
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: [String],
        required: true,
    },
    cloudinaryId: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Visit", VisitSchema);