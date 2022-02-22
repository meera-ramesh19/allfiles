// const mongoose = require('mongoose');

// const DoctorSchema = new mongoose.Schema({
//     docPracticeName: {
//         type: String,
//         required: true,
//     },
//     docName: {
//         type: String,
//         required: true,
//     },
//     docAddress: {
//         type: String,
//         required: true,
//     },
//     docSpecialization: {
//         type: String,
//         required: true,
//         enum: ['primary', 'eye', 'ent', 'foot', 'gastro', 'cardio',
//             'gynecology', 'orthopedic', 'general',
//         ],
//         default: 'primary',
//     },
//     docGender: {
//         type: String,
//         required: true,
//     },
//     docVisitDate: {
//         type: Date,
//         required: true,
//     },
//     docInNetwork: {
//         type: String,
//         required: true,
//     },
//     docCopay: {
//         type: Number,
//         required: true,
//     },
//     docInstructions: {
//         type: String,
//         required: true,
//     },
//     docFollowUp: {
//         type: String,
//         enum: ['Yes', 'No'],
//         default: 'No',
//     },
//     docFollowUpDate: {
//         type: Date,
//         default: 'Unknown',
//     },
//     docPillsImage: {
//         type: String,
//         default: 'Unknown',
//     },
//     docCreamImage: {
//         type: String,
//         // required: true,
//         default: 'Unknown',
//     },
//     docDropsImage: {
//         type: String,
//         // required: true,
//         default: 'Unknown',
//     },
//     doclat: {
//         type: String,
//         required: true,
//     },
//     doclon: {
//         type: String,
//         required: true,
//     },
//     patient: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Patient',
//     },
//     visit: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Visit',
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     },
//     cloudinaryId: {
//         type: String,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// }, { timestamps: true });
// module.exports = mongoose.model('Patient', PatientSchema);