import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const PORT = 4044;

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); // Enable CORS

// Import database connection
import "./database/mongoose.js";

//import routes
import patient from "./Routes/patient.js";
import medicalReport from "./Routes/medicalReport.js";
//app use routes
app.use("/patient", patient);
app.use("/medicalReport", medicalReport);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
