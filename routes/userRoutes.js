const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/PatientSignUp').post(userController.addPatient);
router.route('/Login').post(userController.LogPatient);
router.route('/ProfilePatient').post(userController.ProfilePatient);
router.route('/HomeDoctors').post(userController.ProfileDoctorsHomePage);
router.route('/HomePatients').post(userController.ProfilePatientsHomePage);
router.route('/DoctorsSignUp').post(userController.addDoctors);
router.route('/updatedoctor').post(userController.UpdateDoctors);
router.route('/UpdatePatients').post(userController.UpdatePatients);
router.route('/DoctorMen').post(userController.DoctorsMainPage);
router.route('/LoginDoctor').post(userController.LogDoctor);
router.route('/AddPatientToDoctor').post(userController.AddPatientToDoctor);
router.route('/RetrevingPatientToDoctor').post(userController.RetrevingPatientToDoctor);
//router.route('/DoctorRetriveing').post(userController.DoctorRetriveing);


module.exports = router;