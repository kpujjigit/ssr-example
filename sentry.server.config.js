// sentry.server.config.js
import * as Sentry from '@sentry/nextjs';
import { ProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new ProfilingIntegration()],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  beforeSendTransaction(transaction) {
    transaction.setTag('operation', 'server-side');
    return transaction;
  },
});
