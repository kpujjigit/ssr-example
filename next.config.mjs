/** @type {import('next').NextConfig} */
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  // Your existing Next.js configuration
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin.
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
