// sentry.server.config.js
import * as Sentry from '@sentry/nextjs';
import { ProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: 'https://4caf53527042b95271893cfa197eeab6@o4504052292517888.ingest.us.sentry.io/4507986010898432',
  integrations: [new ProfilingIntegration()],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  beforeSendTransaction(transaction) {
    transaction.setTag('operation', 'server-side');
    return transaction;
  },
});
