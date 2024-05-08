const pool = require('../db'); // Import PostgreSQL pool instance

const submitForm = async (req, res) => {
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
};

module.exports = {
  submitForm
};
