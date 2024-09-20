import { GetServerSideProps } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import * as Sentry from '@sentry/nextjs';
import "@sentry/tracing";

interface HomeProps {
  data: string;
}

async function fetchData() {
  const transaction = Sentry.startTransaction({ name: 'fetchData' });
  try {
    // Simulate data fetching
    const data = 'Hello, world!';
    return data;
  } catch (error) {
    Sentry.captureException(error);
    return 'Error fetching data';
  } finally {
    transaction.finish();
  }
}

export default async function Home({ data }: HomeProps) {
  const fetchedData = await fetchData();

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
          <li>Data fetched from server: {fetchedData}</li>
        </ol>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const transaction = Sentry.startSpan(
    {
      op: 'task',
      name: 'Fetching server-side props'
    },
    (span) => {
      // You can add any additional logic here if needed
      return span;
    }
  );
  try {
    // Simulate data fetching
    const data = 'Hello, world!';
    return {
      props: { data },
    };
  } catch (error) {
    Sentry.captureException(error);
    return {
      props: { data: 'Error fetching data' },
    };
  } finally {
    transaction.end();
  }
};
