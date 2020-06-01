module.exports = {
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs'
  ],
  stories: ['../src/**/*.stories.(tsx|mdx)'],
    webpackFinal: async config => {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          // Optional
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      });
      config.resolve.extensions.push('.ts', '.tsx');
      return config;
    },
    };