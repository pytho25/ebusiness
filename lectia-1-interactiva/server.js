// Minimal static file server for Lesson 1. No dependencies, Node.js standard library only.
// Listens on $PORT (set by the hosting platform), or 3000 when PORT is not set.

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const HIDDEN = new Set(['server.js', 'package.json', 'package-lock.json']);
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

function notFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404: pagina nu există');
}

http
  .createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { Allow: 'GET, HEAD' });
      return res.end();
    }

    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    } catch {
      res.writeHead(400);
      return res.end();
    }
    if (pathname.includes('\0')) return notFound(res);
    if (pathname.endsWith('/')) pathname += 'index.html';

    const file = path.join(ROOT, path.normalize(pathname));
    const rel = path.relative(ROOT, file);
    const blocked =
      rel === '' ||
      rel.startsWith('..') ||
      path.isAbsolute(rel) ||
      rel.split(path.sep).some((part) => part.startsWith('.')) ||
      HIDDEN.has(rel);
    if (blocked) return notFound(res);

    fs.readFile(file, (err, data) => {
      if (err) return notFound(res);
      res.writeHead(200, {
        'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'public, max-age=300',
        'X-Content-Type-Options': 'nosniff',
      });
      res.end(req.method === 'HEAD' ? undefined : data);
    });
  })
  .listen(PORT, () => {
    console.log(`Lecția 1 rulează pe portul ${PORT}`);
  });
