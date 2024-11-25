require('dotenv').config();
const express = require('express');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Use routes from the `routes` folder
app.use('/api', routes);


app.get('/testserver', (req, res) => {
  res.json({ summary: { status: "SUCCESS", reason: "SERVER_RUNNING" } });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
