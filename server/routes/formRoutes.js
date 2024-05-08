const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');

// Route to handle form submissions
router.post('/submit', submitForm);

module.exports = router;
