/** @type {import('next').NextConfig} */
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  // Your existing Next.js configuration
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push('@sentry-internal/node-cpu-profiler');
    return config;
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin.
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
