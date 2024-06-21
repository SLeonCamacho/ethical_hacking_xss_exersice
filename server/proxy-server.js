const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 4000;

app.use('/captura_datos', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  pathRewrite: {
    '^/captura_datos': '/captura_datos',
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Access-Control-Allow-Origin', '*');
  },
}));

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
