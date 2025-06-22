import styles from './page.module.css';
import * as Sentry from '@sentry/nextjs';

async function fetchData() {
  return Sentry.startSpan({ name: 'fetchData' }, async (span) => {
    span.setAttribute('operation', 'client-side');
    try {
      // Simulate data fetching
      const data = 'Hello, world!';
      return data;
    } catch (error) {
      Sentry.captureException(error);
      return 'Error fetching data';
    }
  });
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Sentry SSR Example</h1>
        <p className={styles.tagline}>Monitor client and server operations with ease.</p>
        <p className={styles.message}>Data fetched from server: {data}</p>
      </main>
    </div>
  );
}
