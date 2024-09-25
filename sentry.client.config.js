// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://4caf53527042b95271893cfa197eeab6@o4504052292517888.ingest.us.sentry.io/4507986010898432',
  tracesSampleRate: 1.0,
  beforeSendTransaction(transaction) {
    transaction.tags = {
      ...transaction.tags,
      operation: 'client-side',
    };
    return transaction;
  },
});