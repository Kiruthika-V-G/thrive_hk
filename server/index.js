const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Route to handle form submissions
app.post('/api/form/submit', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO patients (name, email, phone) VALUES ($1, $2, $3)',
      [name, email, phone]
    );
    client.release(); // Release the client back to the pool
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
