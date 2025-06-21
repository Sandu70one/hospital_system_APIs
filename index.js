import express from 'express';
import 'dotenv/config';
const app = express();
const PORT = 3000;

// Import database connection
import './database/mongoose.js';

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, Node.js Server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
