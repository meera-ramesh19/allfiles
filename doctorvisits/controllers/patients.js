const fs = require('fs');
const Patient = require('../models/Patient')
    // const Doctor = require('../models/Doctor')
    // const Visit = require('../models/Visit')
const path = require("path");
const User = require('../models/User')
    // const cloudinary = require('../middleware/cloudinary')
const { cloudinary } = require('../middleware/cloudinary')
const moment = require('moment')
const upload = require("../middleware/multer");

module.exports = {
    getProfile: async(req, res) => {
        // console.log(req.user)
        try {
            const patientItems = await Patient.find({ userId: req.user.id });

            res.render("profile.ejs", { patient: patientItems, user: req.user });
        } catch (err) {
            console.log(err);
        }
    },

    createPatient: async(req, res) => {
        //creating new record in db
        // console.log(req.file)
        console.log(req.files)
            // console.log(req.body.docVisitDate)
        const fileErrors = [];
        var yesterday = moment().subtract(0, "day").format("YYYY-MM-DD");
        var birthToDate = req.body.patDob
        var appDate = req.body.docVisitDate
        var followDate = req.docFollowUpDate
        if (moment(birthToDate, "YYYY-MM-DD", true).isAfter(yesterday)) {
            // alert("date is today or in future");
            // console.log("date is today or in future");
            fileErrors.push({ msg: "Date of birth cannot be later than today" })
        }
        if (moment(appDate, "YYYY-MM-DD", true).isBefore(yesterday)) {
            // alert("date is today or in future");
            // console.log("date is today or in future");
            fileErrors.push({ msg: "Visit date cannot be earlier than today" })

        }
        if (moment(followDate, "YYYY-MM-DD", true).isBefore(appDate)) {

            // alert("date is today or in future");
            // console.log("date is today or in future");
            fileErrors.push({ msg: "FollowUpDate cannot be earlier than VisitDate" })

        }


        // if (!req.file || !req.body.post || !req.body.postBody) {
        //     if (!req.file) fileErrors.push({ msg: "Please select an image before adding a post" })
        //     if (!req.body.post) fileErrors.push({ msg: "Please enter a post title" })
        //     if (!req.body.postBody) fileErrors.push({ msg: "Please enter post body" })
        //     req.flash("errors", fileErrors);
        //     return res.redirect("/login");
        // }
        if (req.file.size > 1024 * 1024 * 3)
            fileErrors.push({ msg: "Uploaded file is larger than 3 MB" });

        if (!(/jpeg|jpg|png|gif/.test(
                path.extname(req.file.originalname).toLowerCase()
            ) && /jpeg|jpg|png|gif/.test(req.file.mimetype)))
            fileErrors.push({ msg: "Only jpeg, jpg, png and gif allowed" });

        if (fileErrors.length) {
            req.flash("errors", fileErrors);
            return res.redirect("/login");
        }



        try {

            // const result = async(path) => await cloudinary.uploads(path, 'Images');
            const result = await cloudinary.uploader.upload(req.file.path);
            const urls = []
            const files = req.files
            for (const file of files) {
                const { path } = file
                console.log(path)
                const newPath = await cloudinary.uploader.upload(path, { folder: birthToDate })
                urls.push(newPath.secure_url)
                    // fs.unlinkSync(path)
            }

            // console.log(urls)

            const patient = await Patient.create({
                postTitle: req.body.postTitle,
                patName: req.body.patName,
                patDob: req.body.patDob,
                patComments: req.body.patComments,
                patAilment: req.body.patAilment,
                // patReviews: req.body.patReviews,
                patDocAdd: req.body.patDocAdd,
                // phStreet: req.body.phStreet,
                // phCity: req.body.phCity,
                // phState: req.body.phState,
                // phCountry: req.body.phCountry,
                // phPincode: req.body.phpinCode,
                patPharmacyName: req.body.patPharmacyName,
                docName: req.body.docName,
                address: req.body.address,
                // docStreet: req.body.docStreet,
                // docCity: req.body.docCity,
                // docState: req.body.docState,
                // docCountry: req.body.docCountry,
                // docPincode: req.body.docPincode,
                docPracticeName: req.body.docPracticeName,
                docSpecialization: req.body.docSpecialization,
                docGender: req.body.docGender,
                docVisitDate: req.body.docVisitDate,
                docCopay: req.body.docCopay,
                docInNetwork: req.body.docInNetwork,
                docInstructions: req.body.docInstructions,
                docFollowUp: req.body.docFollowup,
                docFollowUpDate: req.body.docFollowUpDate,
                docPills: req.body.docPills,
                docCream: req.body.docCream,
                docDrops: req.body.docDrops,
                // image: result.secure_url,
                image: urls,
                // lat: req.body.lat,
                // lon: req.body.lon,

                user: req.user,
                cloudinary_id: result.public_id,
                cloudinary_id: birthToDate,
                files: req.files,
            });
            await patient.save();
            console.log('Patient has been added!');
            res.redirect(`/patients`)
        } catch (err) {
            console.error(err)
        }
    },


    getPatient: async(req, res) => {
        try {
            //Find function without any argument will return all
            //the records from the 'Person' collection.
            const PatientsAllVisits = await Patient.find()
            res.render('index.ejs', { patients: PatientsAllVisits, reviews: patReviews, user: req.user, leaflet: false })
        } catch (err) {
            console.error(err)
        }
    },


    UpdatePatient: async(req, res) => {
        const { id } = req.params
        try {
            const patient = await Patient.findById(id).populate('user')
            res.render('updatepat.ejs', { patient, user: req.user, leaflet: true })
        } catch (e) {
            console.error(e)
        }
    },

    deletePatient: async(req, res) => {
        try {
            const patient = await Patient.findById({ _id: req.params.id })
            await cloudinary.uploader.destroy(patient.cloudinaryId)
            await Patient.remove({ _id: req.params.id })
            res.redirect('/patietn')
        } catch (err) {
            console.error(err)
            res.redirect('/profile')
        }
    },

    getUserProfile: async(request, response) => {
        try {
            const userPatients = await Patient.find({ userId: request.params.id }).sort({ date: 'desc' })
            response.render('user.ejs', { patients: userPatients, user: request.user })
        } catch (error) {
            console.error(error)
        }
    },

    // putDoctor: async(req, res) => {
    //     try {
    //         // get the person that we want to update data
    //         // fill the form with that data
    //         // use the data from form to update that person
    //         // redirect to /persons/:id
    //         const patient = await Patient.findOneAndUpdate({ _id: req.params.id }, req.body)
    //         res.redirect(`/patient/${patient._id}`)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // },
    // getDoctors: async(req, res) => { //filtering records
    //     try {
    //         const PatientVisits = await Patient.find({ user: req.user._id })
    //         res.render('profile.ejs', { patients: PatientVisits, reviews: patReviews, user: req.user, leaflet: true })
    //     } catch (err) {
    //         console.error(err)
    //     }
    // },

    // getDoctorById: async(req, res) => {
    //     const { id } = req.params
    //         // const { id } = req.body
    //     try {
    //         const patient = await Patient.findById(id).populate('user')
    //         res.render('patient.ejs', { patient: patient, reviews: patReviews, user: req.user, leaflet: true })
    //     } catch (e) {
    //         console.error(e)
    //     }
    // },

}