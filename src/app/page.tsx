import Image from 'next/image';
import styles from './page.module.css';
import * as Sentry from '@sentry/nextjs';

interface HomeProps {
  data: string;
}

async function fetchData() {
  const transaction = Sentry.startSpan({ name: 'fetchData' }, (span) => span);
  try {
    // Simulate data fetching
    const data = 'Hello, world!';
    return data;
  } catch (error) {
    Sentry.captureException(error);
    return 'Error fetching data';
  } finally {
    transaction.end();
  }
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
          <li>Data fetched from server: {data}</li>
        </ol>
      </main>
    </div>
  );
}
