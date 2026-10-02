import express from 'express';
import apiRouter from './api.ts';

const app = express();

// Body parsing with 50mb limit for binary images and json
app.use(express.raw({ type: ['image/*', 'application/octet-stream'], limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health checks
app.get(['/api/health', '/health'], (_req, res) => {
  res.status(200).json({ status: 'ok', platform: 'vercel', time: new Date().toISOString() });
});

// Mount API router under /api and root to handle any rewrite variations
app.use('/api', apiRouter);
app.use('/', apiRouter);

export default app;
