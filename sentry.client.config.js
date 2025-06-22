// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // Profiling is only enabled on the server for this example
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  beforeSendTransaction(transaction) {
    transaction.setTag('operation', 'client-side');
    return transaction;
  },
});
