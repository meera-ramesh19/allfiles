const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const patientsController = require("../controllers/patients");
//upload replaced with storage
const upload = require("../middleware/multer");




//Patient Routes - simplified for now
// 
router.get("/", ensureAuth, patientsController.getProfile);

//This route is connected to the route form in patients.js .so hence the route in 
//profile.ejs form is /patients/createPatient
router.post("/createPatient", uploadMultiple.array('multi-files', 20), patientsController.createPatient);
router.get("/:id", patientsController.getPatient);

//router.get('/createPatient', patientsController.createPatientGet);


// router.put("/updatePatient/:id", ensureAuth, patientsController.updatePatient)
// router.delete("/deletePatient /: id ", patientsController.deletePatient)
//router.post("/likePost/:id", patientsController.likePost);

//router.get("/:id", DoctorController.getDoctor); // /doctors/:id
//router.get("/: id ", VisitController.getVisit); // /doctors/:id


//router.delete("/deletePatient /: id ", patientsController.deletePatient);



//<!--create doctor-- -- >
//router.post("/createDoctor", upload.single("file"), doctorsController.createDoctors);
//router.post("/createVisit", upload.single("file"), visitsController.createDoctors);


//router.delete("/deletePost/:id", doctorsController.deleteDoctors);



//router.put("/:id", DoctorController.getDoctorById); // /doctors/:id


//router.put("/:id", VisitController.getVisitById); // /doctors/:id

//router.get("/updateDoctors/:id", ensureAuth, doctorsController.getUpdate)
//router.put("/updateDoctors/:id", ensureAuth, doctorsController.putDoctors)

// router.put("/likePost/:id", patientsController.likePost);
// router.put("/reviewPost/:id", patientsController.reviewPost);



module.exports = router;