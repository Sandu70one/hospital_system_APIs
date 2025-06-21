import express from "express";
import {MedicalReport} from "../models/medicalReport.js";
import { Patient } from "../models/patient.js";

const router = express.Router();

// Create a new medical report for a specific patient

router.post('/createReport', async (req, res) => {
  const { reportId, idCardNumber, diagnosis, treatment, doctor, notes } = req.body;

    try {
    // Find patient by national ID
    const patient = await Patient.findOne({ nationalId: idCardNumber });
     if (!patient) {
      return res.status(404).json({ message: 'Patient with that national ID not found. please make a patient account first' });
    }

    // Create medical report with patient ObjectId
    const newReport = new MedicalReport({
      reportId,
      patient: patient._id,
      diagnosis,
      treatment,
      doctor,
      notes
    });

    await newReport.save();
    res.status(201).json({ message: 'Medical report created successfully', data: newReport });
  } catch (error) {
    res.status(500).json({ message: 'Error creating medical report', error });
  }
});


// Get all medical reports for a specific patient by national ID
router.get('/findReports/:idCardNumber', async (req, res) => {
  try {
    // Find patient by national ID
    const patient = await Patient.findOne({ nationalId: req.params.idCardNumber });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Find all medical reports for the patient
    const reports = await MedicalReport.find({ patient: patient._id }).populate('patient', 'firstName lastName nationalId');

    res.json({ data: reports });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching medical reports', error });
  }
});

export default router;