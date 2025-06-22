# SSR Example with Sentry

This example demonstrates how to use Sentry with a Next.js project that includes server side rendering and profiling.

## Prerequisites

- Node.js 18 or later
- npm

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create a `.env` file** in the project root with your Sentry credentials:

   ```bash
   NEXT_PUBLIC_SENTRY_DSN=<your_dsn>
   SENTRY_DSN=<your_dsn>
   SENTRY_AUTH_TOKEN=<your_auth_token>
   SENTRY_ORG=<your_organization_slug>
   SENTRY_PROJECT=<your_project_name>
   ```

   The DSN values configure the client and server SDKs. The auth token, organization slug, and project name are used by the Sentry Webpack plugin when building the application.

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Features

- **Server-side rendering example** available at `/ssr-example`.
- **Client and server spans** contain a custom `operation` tag to distinguish where they were created.
- **Stylistic front‑end** inspired by [sentry.io](https://sentry.io).

