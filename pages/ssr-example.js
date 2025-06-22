import * as Sentry from '@sentry/nextjs';

export async function getServerSideProps() {
    Sentry.configureScope(scope => {
        scope.setTag('operation', 'server-side');
    });

    const fetchSpan = Sentry.startSpan({ name: 'fetch-data' });
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
    } finally {
        fetchSpan.end();
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