// Lightweight server: serves static files + proxies chat requests to Claude API
// Usage: node server.js
// Then open http://localhost:3000

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY || '';
const MODEL = process.env.CLAUDE_MODEL || 'claude-sonnet-4-20250514';
const ELEVEN_API_KEY = process.env.ELEVENLABS_API_KEY || '';
const DEFAULT_VOICE_ID = '35TZ7cBoYATiH37sLH1S';

if (!API_KEY) console.warn('  WARNING: ANTHROPIC_API_KEY not set — /api/chat will fail');
if (!ELEVEN_API_KEY) console.warn('  WARNING: ELEVENLABS_API_KEY not set — /api/tts will fail');

// Root directory is wherever server.js lives
const ROOT = path.resolve(__dirname);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jsx': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

function serveStatic(req, res) {
  // Parse just the pathname, ignore query string
  const rawPath = req.url.split('?')[0];
  let filePath = decodeURIComponent(rawPath);
  if (filePath === '/') filePath = '/AnaCredit Synthetic Cohort.html';

  const fullPath = path.resolve(path.join(ROOT, filePath));

  // Prevent directory traversal
  if (!fullPath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  fs.stat(fullPath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      console.log(`  404: ${filePath} -> ${fullPath}`);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + filePath);
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';

    fs.readFile(fullPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Read error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
}

function handleChat(req, res) {
  if (!API_KEY) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'ANTHROPIC_API_KEY not set.' }));
    return;
  }

  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    let parsed;
    try { parsed = JSON.parse(body); } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
      return;
    }

    const { system, messages } = parsed;

    const payload = JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      system,
      messages,
    });

    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    console.log(`  Chat: ${messages.length} messages -> ${MODEL}`);

    const apiReq = https.request(options, (apiRes) => {
      let responseBody = '';
      apiRes.on('data', chunk => { responseBody += chunk; });
      apiRes.on('end', () => {
        res.writeHead(apiRes.statusCode, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(responseBody);
        if (apiRes.statusCode !== 200) {
          console.log(`  API ${apiRes.statusCode}: ${responseBody.slice(0, 200)}`);
        }
      });
    });

    apiReq.on('error', (err) => {
      console.log(`  API error: ${err.message}`);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'API request failed: ' + err.message }));
    });

    apiReq.write(payload);
    apiReq.end();
  });
}

function handleTTS(req, res) {
  if (!ELEVEN_API_KEY) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'ELEVENLABS_API_KEY not set.' }));
    return;
  }

  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    let parsed;
    try { parsed = JSON.parse(body); } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
      return;
    }

    const { text, voice_id } = parsed;
    if (!text) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing text' }));
      return;
    }

    const voiceId = voice_id || DEFAULT_VOICE_ID;
    const payload = JSON.stringify({
      text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    });

    const options = {
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': ELEVEN_API_KEY,
        'Content-Length': Buffer.byteLength(payload),
        'Accept': 'audio/mpeg',
      },
    };

    console.log(`  TTS: ${text.length} chars -> voice ${voiceId}`);

    const apiReq = https.request(options, (apiRes) => {
      if (apiRes.statusCode !== 200) {
        let errBody = '';
        apiRes.on('data', chunk => { errBody += chunk; });
        apiRes.on('end', () => {
          console.log(`  TTS ${apiRes.statusCode}: ${errBody.slice(0, 200)}`);
          res.writeHead(apiRes.statusCode, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
          res.end(JSON.stringify({ error: `TTS failed: ${apiRes.statusCode}` }));
        });
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Access-Control-Allow-Origin': '*',
      });
      apiRes.pipe(res);
    });

    apiReq.on('error', (err) => {
      console.log(`  TTS error: ${err.message}`);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'TTS request failed: ' + err.message }));
    });

    apiReq.write(payload);
    apiReq.end();
  });
}

const server = http.createServer((req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    handleChat(req, res);
  } else if (req.method === 'POST' && req.url === '/api/tts') {
    handleTTS(req, res);
  } else {
    serveStatic(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`\n  AnaCredit Synthetic Cohort — Chat Server`);
  console.log(`  Root: ${ROOT}`);
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  Model: ${MODEL}`);
  console.log(`  API Key: ${API_KEY ? '***' + API_KEY.slice(-4) : 'NOT SET'}\n`);
});
