const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    docPracticeName: {
        type: String,
        required: true,
    },
    docName: {
        type: String,
        required: true,
    },
    docAddress: [{

        streetName: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        pinCode: {
            type: Number
        }
    }],
    docSpecialization: {
        type: String,
        required: true,
        enum: ['Primary', 'Optometry', 'Ophthalmology', 'Podiatric', 'GastroEnterology', 'CardioVascular',
            'Gynecology', 'Urinary', 'Allergies', 'Immunology', 'Rheumatology',
            'Pulmonary', 'Orthopedics', 'General ', 'Dental', 'Dermatology', 'Mental Health',
            'Neurology', 'Physical Medicine', 'Surgical', 'Pediatric Specialists'
        ],
        default: 'Primary',
    },
    docGender: {
        type: String,
        required: true,
    },
    docVisitDate: {
        type: Date,
        required: true,
    },
    docInNetwork: {
        type: String,
        required: true,
    },
    docCopay: {
        type: Number,
        required: true,
    },
    docFollowUp: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No',
    },
    docFollowUpDate: {
        type: Date
    },
    docReview: {
        type: String
    },
    image: {
        type: [String],
        // required: true,
    },
    doclat: {
        type: String

    },
    doclon: {
        type: String

    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    visitInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VisitInfo',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cloudinaryId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
module.exports = mongoose.model('Doctor', DoctorSchema);