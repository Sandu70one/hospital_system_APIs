import mongoose from 'mongoose';

export const patientSchema = new mongoose.Schema({
  nationalId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, trim: true, lowercase: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }
  },
  emergencyContact: {
    name: { type: String },
    relation: { type: String },
    phone: { type: String }
  },
  admissionDate: { type: Date, default: Date.now },
  dischargeDate: { type: Date },
  medicalHistory: [{ type: String }],
  currentStatus: {
    type: String,
    enum: ['Admitted', 'Discharged', 'Under Observation'],
    default: 'Admitted'
  }
}, { timestamps: true });

export const Patient = mongoose.model('Patient', patientSchema);
