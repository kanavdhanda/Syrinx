import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the Vite build output directory
app.use(express.static(path.join(__dirname, 'dist')));

// Set up proxy for /level-1 requests
app.use('/level-1', createProxyMiddleware({
  target: 'https://srinx-ccs.blr1.cdn.digitaloceanspaces.com/',
  changeOrigin: true,
  pathRewrite: {
    '^/level-1': ''
  },
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
    proxyRes.headers['Cross-Origin-Opener-Policy'] = 'same-origin';
  }
}));

// Set headers for all responses
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

// Serve index.html for any other routes (for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});