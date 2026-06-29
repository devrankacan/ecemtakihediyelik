const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4001;

const DATA_DIR = path.join(__dirname, 'data');
const SITE_DATA_FILE = path.join(DATA_DIR, 'site-data.json');
const ADMIN_CREDS_FILE = path.join(DATA_DIR, 'admin-creds.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);
if (!fs.existsSync(SITE_DATA_FILE)) fs.writeFileSync(SITE_DATA_FILE, '{}');
if (!fs.existsSync(ADMIN_CREDS_FILE)) {
  fs.writeFileSync(ADMIN_CREDS_FILE, JSON.stringify({ username: 'ecemyonetim', password: 'Bb-EcmTk!2026#Vr' }));
}

app.use(express.json({ limit: '40mb' }));
app.use('/uploads', express.static(UPLOADS_DIR));
app.use(express.static(__dirname));

app.post('/api/upload', (req, res) => {
  const { dataUrl } = req.body;
  const match = typeof dataUrl === 'string' && dataUrl.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!match) return res.status(400).json({ ok: false, error: 'Geçersiz görsel formatı' });
  const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
  const buffer = Buffer.from(match[2], 'base64');
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  fs.writeFileSync(path.join(UPLOADS_DIR, filename), buffer);
  res.json({ ok: true, url: `/uploads/${filename}` });
});

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
