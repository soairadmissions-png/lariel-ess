import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import apiRouter from './server/api';
import { getDatabase } from './server/db';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Static serving for user uploads: check public/uploads, src/assets/images, and dist/uploads
  app.use('/uploads', express.static(path.join(process.cwd(), 'public', 'uploads')));
  app.use('/uploads', express.static(path.join(process.cwd(), 'src', 'assets', 'images')));
  app.use('/uploads', express.static(path.join(process.cwd(), 'dist', 'uploads')));
  app.use('/public/uploads', express.static(path.join(process.cwd(), 'public', 'uploads')));
  app.use('/src/assets/images', express.static(path.join(process.cwd(), 'src', 'assets', 'images')));
  // If an /uploads request is not found, return 404 instead of letting Vite or SPA fallback return index.html
  app.use('/uploads', (req, res) => {
    res.status(404).json({ error: 'Image not found in uploads' });
  });

  // Body parsing with 50mb limit for large high-res photos
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // Mount API router
  app.use('/api', apiRouter);

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Helper to generate bootstrap script from persistent data source
  const getBootstrapInjection = () => {
    try {
      const db = getDatabase();
      const payload = {
        products: db.products || [],
        categories: db.categories || [],
        settings: db.settings || null,
        timestamp: Date.now(),
      };
      return `<script id="__LARIEL_BOOTSTRAP_DATA__">window.__LARIEL_INITIAL_PRODUCTS__ = ${JSON.stringify(payload.products)}; window.__LARIEL_INITIAL_CATEGORIES__ = ${JSON.stringify(payload.categories)}; window.__LARIEL_INITIAL_SETTINGS__ = ${JSON.stringify(payload.settings)};</script>`;
    } catch (err) {
      console.error('Failed to read database for bootstrap injection:', err);
      return '';
    }
  };

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.get('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const indexPath = path.resolve(process.cwd(), 'index.html');
        let template = fs.readFileSync(indexPath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const injection = getBootstrapInjection();
        if (injection) {
          template = template.replace('</head>', `${injection}\n</head>`);
        }
        res.status(200)
          .set({
            'Content-Type': 'text/html',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          })
          .end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
    app.get('*', (req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        let html = fs.readFileSync(indexPath, 'utf-8');
        const injection = getBootstrapInjection();
        if (injection) {
          html = html.replace('</head>', `${injection}\n</head>`);
        }
        res.status(200)
          .set({
            'Content-Type': 'text/html',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          })
          .end(html);
      } else {
        res.status(404).send('Not found');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Lariel Essentials Server running on http://localhost:${PORT}`);
  });
}

startServer();
