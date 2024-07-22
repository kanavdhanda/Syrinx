import { defineConfig } from 'vite';
import { createProxyMiddleware } from 'http-proxy-middleware';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
    server: {
        // fs: {
        //     allow: ['.'],
        // },
        // proxy: {
        //     '/level-1': {
        //       target: 'https://srinx-ccs.blr1.cdn.digitaloceanspaces.com/',
        //     //   target: 'https://api.helix.ccstiet.com/',

        //       changeOrigin: true,
        //       pathRewrite: (path) => path.replace(/^\/game/, '/level-1'), // Adjusts the path to include /level-1
        //       onProxyReq: (proxyReq, req, res) => {
        //         console.log('Proxying request:', req.url, 'to:', proxyReq.path);
        //       },
        //       onError: (err, req, res) => {
        //         console.log('Error proxying request:', req.url, err);   
        //     },
        //   },
        // },
        proxy: {
            '/level-1': {
              target: 'https://srinx-ccs.blr1.cdn.digitaloceanspaces.com/',
            //   target: 'https://api.helix.ccstiet.com/',
              changeOrigin: true,
            //   rewrite: (path) => path.replace(/^\/level-1/, ''),
              configure: (proxy) => {
                proxy.on('proxyRes', (proxyRes, req, res) => {
                  // Add custom headers here
                  proxyRes.headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
            proxyRes.headers['Cross-Origin-Opener-Policy'] = 'same-origin';
                });
              },
      
            }},
        headers: {
                "Cross-Origin-Embedder-Policy": "require-corp",
                "Cross-Origin-Opener-Policy": "same-origin",
              },
    },
    publicDir: 'public',
});


