//const Patient = require('../models/Patient')
const Doctor = require('../models/Doctor')
    // const Visit = require('../models/Visit')
const User = require('../models/User')
const cloudinary = require('../middleware/cloudinary')

// module.exports = { // 
//getDoctors: async(req, res) => {
//filtering record

//     try {
//         const DoctorVisits = await Doctor.find({ user: req.user._id })
//         res.render('profile.ejs', { doctor: DoctorVisits, user: req.user, leaflet: true })
//     } catch (err) {
//         console.error(err)
//     }
// },
// getAllDoctors: async(req, res) => {
//     try {
//         //Find function without any argument will return all
//         //the records from the 'Person' collection.
//         const DoctorsAllVisits = await Doctor.find()
//         res.render('index.ejs', { doctors: DoctorsAllVisits, user: req.user, leaflet: false })
//     } catch (err) {
//         console.error(err)
//     }
// },
// getDoctorById: async(req, res) => {
//         const { id } = req.params
//             // const { id } = req.body
//         try {
//             const doctor = await Doctor.findById(id).populate('user')
//                 //         res.render('doctor.ejs', { doctor: doctor, user: req.user, leaflet: true })
//     } catch (e) {
//         console.error(e)
//     }

// },
// }
// getUpdateDoctor: async(req, res) => {
//     const { id } = req.params
//     try {
//         const doctor = await Doctor.findById(id).populate('user')
//         res.render('updatedoc.ejs', { doctor, user: req.user, leaflet: true })
//     } catch (e) {
//         console.error(e)
//     }
// },
// putDoctor: async(req, res) => {
//     try {
//         // get the person that we want to update data
//         // fill the form with that data
//         // use the data from form to update that person
//         // redirect to /persons/:id
//         const doctor = await Doctor.findOneAndUpdate({ _id: req.params.id }, req.body)
//         res.redirect(`/doctor/${doctor._id}`)
//     } catch (err) {
//         console.error(err)
//     }
// },

// }