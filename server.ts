import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Persistent data directory
const DATA_DIR = path.resolve(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function getStoredData(filePath: string): any[] {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content) || [];
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return [];
}

function saveStoredData(filePath: string, data: any[]): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`Error saving ${filePath}:`, err);
  }
}

// Ensure initial files exist
if (!fs.existsSync(LEADS_FILE)) {
  saveStoredData(LEADS_FILE, []);
}
if (!fs.existsSync(MESSAGES_FILE)) {
  saveStoredData(MESSAGES_FILE, []);
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'ATLAS SIGNATURE Development API'
  });
});

// Consultation Lead Capture
app.post('/api/consultations', (req, res) => {
  const {
    fullName,
    phone,
    countryCode,
    email,
    preferredContactMethod,
    propertyType,
    preferredProject,
    budget,
    purpose,
    timeline,
    message,
    consent
  } = req.body;

  // Validation
  if (!fullName || !fullName.trim()) {
    return res.status(400).json({ error: 'Full name is required' });
  }
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email address is required' });
  }
  if (!phone || !phone.trim()) {
    return res.status(400).json({ error: 'Phone number is required' });
  }
  if (!consent) {
    return res.status(400).json({ error: 'Consent to terms and privacy policy is required' });
  }

  const leads = getStoredData(LEADS_FILE);
  const newLead = {
    id: `AS-LEAD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'PENDING_REVIEW',
    fullName: fullName.trim(),
    phone: `${countryCode || '+212'} ${phone.trim()}`,
    email: email.trim().toLowerCase(),
    preferredContactMethod: preferredContactMethod || 'WhatsApp',
    propertyType: propertyType || 'Any',
    preferredProject: preferredProject || 'General Inquiry',
    budget: budget || 'Not decided yet',
    purpose: purpose || 'Personal Residence',
    timeline: timeline || 'Exploring',
    message: message ? message.trim() : '',
    consent: true,
    assignedAdvisor: 'Atlas Executive Concierge Desk'
  };

  leads.unshift(newLead);
  saveStoredData(LEADS_FILE, leads);

  console.log(`[API] Saved consultation lead: ${newLead.id} for ${newLead.fullName}`);

  res.status(201).json({
    success: true,
    message: 'Consultation request securely received and recorded.',
    lead: newLead
  });
});

// Get consultation leads (for inquiries dashboard/verification)
app.get('/api/consultations', (req, res) => {
  const leads = getStoredData(LEADS_FILE);
  res.json({
    count: leads.length,
    leads
  });
});

// General contact messages
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const messages = getStoredData(MESSAGES_FILE);
  const newMessage = {
    id: `AS-MSG-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone ? phone.trim() : 'N/A',
    subject: subject ? subject.trim() : 'General Inquiry',
    message: message.trim()
  };

  messages.unshift(newMessage);
  saveStoredData(MESSAGES_FILE, messages);

  res.status(201).json({
    success: true,
    message: 'Message delivered to Atlas Signature advisory office.',
    contact: newMessage
  });
});

app.get('/api/contact', (req, res) => {
  const messages = getStoredData(MESSAGES_FILE);
  res.json({ count: messages.length, messages });
});

// Start server with Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[ATLAS SIGNATURE Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
