const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
    target: 'https://srinx-ccs.blr1.cdn.digitaloceanspaces.com/',
    changeOrigin: true,
    pathRewrite: {
        '^/api/proxy': '/level-1',
    },
    onProxyRes: (proxyRes, req, res) => {
        proxyRes.headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
        proxyRes.headers['Cross-Origin-Opener-Policy'] = 'same-origin';
    },
});

module.exports = (req, res) => {
    proxy(req, res, (err) => {
        if (err) {
            res.status(500).json({ error: 'Proxy error', details: err.message });
        }
    });
};
