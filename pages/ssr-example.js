import * as Sentry from '@sentry/nextjs';

export async function getServerSideProps(context) {
    console.log('tis workin');
    Sentry.init({
        dsn: 'https://4caf53527042b95271893cfa197eeab6@o4504052292517888.ingest.us.sentry.io/4507986010898432',
        tracesSampleRate: 1.0,
        beforeSend(event) {
            event.tags = {
                ...event.tags,
                operation: 'server-side',
            };
            return event;
        },
        beforeSendTransaction(transaction) {
            transaction.tags = {
                ...transaction.tags,
                operation: 'server-side',
            };
            
            return transaction;
        },
    });

    Sentry.withScope(scope => {
        scope.setTag('operation', 'server-side');
    });

    try {
        // Simulate fetching data from an API or database
        const data = { message: 'Hello from the server side!' };

        return {
            props: { data }, // will be passed to the page component as props
        };
    } catch (error) {
        Sentry.captureException(error);
        return {
            props: { error: 'Failed to fetch data' },
        };
    }
}

const SSRExample = ({ data, error }) => {
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Server Side Rendering Example</h1>
            <p>{data.message}</p>
        </div>
    );
};

export default SSRExample;