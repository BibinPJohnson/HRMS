const express = require('express');
const getEmployeeReport = require('../api/hrms/getEmployeeReport');
const getEmployeeSalary = require('../api/hrms/getEmployeeSalary');
const getEmployeeSalaryDetails = require('../api/hrms/getEmployeeSalaryDetails');

const router = express.Router();

// Endpoint for getEmployeeReport
router.get('/getEmployeeReport', async (req, res) => {
  console.log('GET /getEmployeeReport called'); // Debug log
  try {
    const result = await getEmployeeReport();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint for getEmployeeSalary
router.post('/getEmployeeSalary', async (req, res) => {
  try {
    const result = await getEmployeeSalary(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint for getEmployeeSalaryDetails
router.post('/getEmployeeSalaryDetails', async (req, res) => {
  try {
    const result = await getEmployeeSalaryDetails(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
