import express from 'express';
import apiRouter from '../server/api';

const app = express();

// Body parsing with 50mb limit for binary images and json
app.use(express.raw({ type: ['image/*', 'application/octet-stream'], limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Mount API router under /api and root to handle any rewrite variations
app.use('/api', apiRouter);
app.use('/', apiRouter);

// Root health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', platform: 'vercel', time: new Date().toISOString() });
});

export default app;
