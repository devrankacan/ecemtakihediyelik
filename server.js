const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, 'data');
const SITE_DATA_FILE = path.join(DATA_DIR, 'site-data.json');
const ADMIN_CREDS_FILE = path.join(DATA_DIR, 'admin-creds.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(SITE_DATA_FILE)) fs.writeFileSync(SITE_DATA_FILE, '{}');
if (!fs.existsSync(ADMIN_CREDS_FILE)) {
  fs.writeFileSync(ADMIN_CREDS_FILE, JSON.stringify({ username: 'ecemyonetim', password: 'Bb-EcmTk!2026#Vr' }));
}

app.use(express.json({ limit: '15mb' }));
app.use(express.static(__dirname));

app.get('/api/site-data', (req, res) => {
  const data = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf8'));
  res.json(data);
});

app.post('/api/site-data', (req, res) => {
  fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(req.body, null, 2));
  res.json({ ok: true });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const creds = JSON.parse(fs.readFileSync(ADMIN_CREDS_FILE, 'utf8'));
  res.json({ ok: username === creds.username && password === creds.password });
});

app.post('/api/change-password', (req, res) => {
  const { username, oldPassword, newPassword } = req.body;
  const creds = JSON.parse(fs.readFileSync(ADMIN_CREDS_FILE, 'utf8'));
  if (oldPassword !== creds.password) return res.json({ ok: false, error: 'Mevcut şifre hatalı!' });
  fs.writeFileSync(ADMIN_CREDS_FILE, JSON.stringify({ username: username || creds.username, password: newPassword }));
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Ecem Takı sunucusu http://localhost:${PORT} adresinde çalışıyor`));
