/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
      },
    images: {
        domains: ['lh3.googleusercontent.com', 'image.tmdb.org'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
          }
        ]
      },
      webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        config.module.rules.push({
          test: /\.node$/i,
          loader: "node-loader",
        });
        return config
      }
}

module.exports = nextConfig
