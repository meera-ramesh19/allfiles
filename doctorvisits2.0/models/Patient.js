const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const PatientSchema = new mongoose.Schema({
            postTitle: {
                type: String,
                required: true,
            },
            patSSN: {
                type: Number,
                required: true,
            },
            patName: {
                type: String,
                required: true,
            },
            patDob: {
                type: Date,
                required: true,
                // default: 'Unknown',
            },
            patPhoneNum: {
                type: Number,
                required: true,
            },
            patAddress: [{

                    pStreet: {
                        type: String
                    },
                    pcity: {
                        type: String
                    },
                    pstate: {
                        String
                    },
                    pcountry: {
                        String
                    },
                    ppinCode: {
                        Number
                    }
                ],
                patEmail: {
                    type: String,
                    required: true,
                    unique: true
                },
                patMaritalStat: {
                    type: String,
                    required: true,
                    // ref: "User",
                    // default: 'Unknown',
                },
                patRace: {
                    type: String,
                    required: true,
                },
                patHeight: {
                    type: Number,
                    required: true,
                },
                patWeight: {
                    type: Number,
                    required: true,
                },
                patInsurance: {
                    type: String,
                    required: true,
                },
                patInsId: {
                    type: String,
                    required: true,
                },
                patAllergies: {
                    type: String,
                    required: true,
                    default: 'None'
                }
                image: {
                    type: String,
                    required: true,
                },
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
                cloudinary_id: {
                    type: String,

                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                },
                // lat: {
                //     type: String,
                //     required: true,
                // },
                // lon: {
                //     type: String,
                //     required: true,
                // },
                // postedBy: {
                //     // type: { user: User.UserSchema },
                //     type: mongoose.Schema.Types.ObjectId,
                //     ref: 'User',
                //     required: true,
                //     unique: false,
                //     sparse: true,
                // },

            },
            { timestamps: true });

        module.exports = mongoose.model('Patient', PatientSchema);