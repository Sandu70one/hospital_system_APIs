import mongoose from 'mongoose';

const medicalReportSchema = new mongoose.Schema({
  reportId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  diagnosis: {
    type: String,
    required: true
  },
  treatment: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    default: ''
  }
}, { timestamps: true });

export const MedicalReport = mongoose.model('MedicalReport', medicalReportSchema);
