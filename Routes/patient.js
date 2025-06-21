import express from 'express';
import { Patient } from '../models/patient.js';

const router = express.Router();

router.post('/createPatient', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient created successfully', data: newPatient });
  } catch (error) {
    res.status(500).json({ message: 'Error creating patient', error });
  }
});

router.get('/findOne/:idCardNumber', async (req, res) => {
    try {
        const patient = await Patient.findOne({ nationalId: req.params.idCardNumber });
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json({ data: patient });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patient', error });
    }
});

export default router;

