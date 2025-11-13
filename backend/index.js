const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Simple CORS allow for local development
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from sample backend', now: new Date().toISOString() });
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(port, () => {
  console.log(`Sample backend listening on http://localhost:${port}`);
});
