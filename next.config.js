module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com'],
      // These are the default values. We might have to adapt them
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    webpack: (config) => {
      config.module.rules.push(
        ...[
          {
            test: /\.md$/,
            use: 'raw-loader',
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ]
      );
  
      config.resolve.fallback = {
        fs: false,
      };
  
      return config;
    },
  };
  