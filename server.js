const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const file = path.join(ROOT, requested);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); return res.end('Not found');
  }
  const ext = path.extname(file);
  const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
  res.writeHead(200, {'Content-Type':types[ext] || 'application/octet-stream'});
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`VELORA running at http://localhost:${PORT}`));
